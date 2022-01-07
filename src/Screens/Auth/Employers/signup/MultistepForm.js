import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import { Step1, Step1ValidationSchema } from "./Steps/Step1";
import {
  checkSignUpDetailApi,
  signUpApi,
  verifyEmailOtpApi,
} from "../../../../apis/auth";
import {
  EmailOtpValidationSchema,
  Step2EmailVerification,
} from "./Steps/Step2EmailVerification";
import { PasswordValidationSchema, Step4Password } from "./Steps/Step4Password";
import {
  PhoneOtpValidationSchema,
  Step3MobileVerification,
} from "./Steps/Step3Mobile";
import { Step } from "./../../../../Components/apps/Step";
import { setToken } from "../../../../store/common/common";
import { useDispatch } from "react-redux";
import Loader from './../../../../Components/Loader';


export const MultistepForm = () => {
  const dispatch = useDispatch()
  const formikRef = useRef(null);
  const ButtonRef = useRef(null);
  const [step, setStep] = useState(0);
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    /**
     * @type {import('formik').FormikProps<{}>}
     */
    const formik = formikRef.current;
    if (formik) {
      formik.setFieldTouched('mobileOtp', false)
      formik.setFieldTouched('legalentityName', false)
      formik.setFieldTouched('email', false)
      formik.setFieldTouched('phone', false)
      formik.setFieldTouched('password', false)
      formik.setFieldTouched('confirmPassword', false)
      formik.setFieldTouched('emailOtp', false)
    }
  }, [step]);

  const SignUpConfig = [
    {
      validationSchema: Step1ValidationSchema,
      component: Step1,
      buttonText: "Next",
    },
    {
      validationSchema: EmailOtpValidationSchema,
      component: Step2EmailVerification,
      buttonText: "Verify",
    },
    {
      validationSchema: PhoneOtpValidationSchema,
      component: Step3MobileVerification,
      buttonText: "Verify",
    },
    {
      validationSchema: PasswordValidationSchema,
      component: Step4Password,
      buttonText: "Sign up",
    },
  ];

  const initialValue = {
    legalentityName: "",
    email: "",
    phone: "",
    countrycode: "+91",
    password: "",
    confirmPassword: "",
    emailOtp: "",
    mobileOtp: "",
    country: "India",
  };

  const handleSubmit = async (values, formikHelpers) => {
    const { setFieldError } = formikHelpers;
    if (step === 0) {
      setLoading(true)
      const res = await checkSignUpDetailApi(
        (({ legalentityName, email, phone }) => ({
          legalentityName,
          email,
          phone,
        }))(values)
      );
      if (!res.success) {
        setLoading(false)
        const { email, name, phone } = res.error.message;
        if (typeof email !== "boolean") setFieldError("email", email);
        if (typeof phone !== "boolean") setFieldError("phone", phone);
        if (typeof name !== "boolean") setFieldError("legalentityName", name);
      }
      if (res.success) { setStep(1); setLoading(false) };
    }
    if (step === 1) {
      setLoading(true)
      const res = await verifyEmailOtpApi(
        (({ email, emailOtp }) => ({
          email,
          otp: parseInt(emailOtp),
        }))(values)
      );

      if (res.success) {
        setLoading(false)
        setStep(2);
      }
      if (!res.success) {
        setLoading(false)
        setFieldError("emailOtp", res.error.message);
      }
    }
    if (step === 2) {
      setLoading(true)
      const res = await verifyEmailOtpApi(
        (({ mobileOtp }) => ({
          otp: parseInt(mobileOtp),
        }))(values)
      );

      if (res.success) {
        setLoading(false)
        setStep(3);
      }
      if (!res.success) {
        setLoading(false)
        setFieldError("mobileOtp", res.error.message);
      }
    }
    if (step === 3) {
      setLoading(true)
      const res = await signUpApi(
        (({ legalentityName, email, phone, countrycode, password }) => ({
          legalentityName,
          email,
          phone,
          countrycode,
          password,
        }))(values)
      );
      if (res.data.token) {
        setLoading(false)
        dispatch(setToken(res.data.token))
      }
      if (res.success) {
        setLoading(false)
        ButtonRef.current.click();
      }
      if (!res.success) {
        setLoading(false)
        alert("check error");
      }
    }
  };

  const RenderComponent = SignUpConfig[step].component;

  return (
    <>
      <Step activeStep={step} />
      <Formik
        innerRef={formikRef}
        initialValues={initialValue}
        validationSchema={SignUpConfig[step].validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, values, touched, errors }) => (
          <div className={"screen"}>
            <RenderComponent handleSubmit={handleSubmit} />
          </div>
        )}
      </Formik>
      <a
        ref={ButtonRef}
        className="drkbluecolor bold_500 ms-2"
        data-bs-toggle="modal"
        data-bs-dismiss="modal"
        data-bs-target={"#Congratulations_modal"}
      //data-bs-dismiss="modal"
      />
      <Loader isLoading={isLoading} />
    </>
  );
};
