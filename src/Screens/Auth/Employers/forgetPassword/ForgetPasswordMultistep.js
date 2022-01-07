import React, { useEffect, useRef, useState } from "react";
import { Formik, FormikProps } from "formik";
import {
  ForgetPasswordStep1,
  ForgetPasswordStep1Schema,
} from "./steps/ForgetPasswordStep1";
import {
  forgetPasswordRequestApi,
  saveResetPasswordApi,
  verifyForgetPasswordApi,
} from "../../../../apis/auth";
import { setToken } from "../../../../store/common/common";
import { useDispatch } from "react-redux";
import {
  ForgetPasswordOtpValidation,
  ForgetPasswordOtpValidationSchema,
} from "./steps/ForgetPasswordStep2VerifyOtp";
import {
  ForgetPasswordStep3Password,
  ForgetPasswordStep3PasswordSchema,
} from "./steps/ForgetPasswordStep3Password";
import Loader from './../../../../Components/Loader';


export const ForgetPasswordMultistepForm = () => {
  const formikRef = useRef(null);
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    /**
     * @type {import('formik').FormikProps<{}>}
     */
    const formik = formikRef.current;
    if (formik) {
      formik.setFieldTouched("confirmPassword", false);
      formik.setFieldTouched("uname", false);
      formik.setFieldTouched("otp", false);
      formik.setFieldTouched("password", false);
    }
  }, [step]);

  const SignUpConfig = [
    {
      validationSchema: ForgetPasswordStep1Schema,
      component: ForgetPasswordStep1,
    },
    {
      validationSchema: ForgetPasswordOtpValidationSchema,
      component: ForgetPasswordOtpValidation,
    },
    {
      validationSchema: ForgetPasswordStep3PasswordSchema,
      component: ForgetPasswordStep3Password,
    },
  ];

  const initialValue = {
    uname: "",
    otp: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values, formikHelpers) => {
    const { setFieldError } = formikHelpers;
    if (step === 0) {
      setLoading(true)
      const res = await forgetPasswordRequestApi({ uname: values.uname });
      if (res.success) {
        setLoading(false)
        dispatch(setToken(res.data.token));
        setStep(1);
      }
      if (!res.success) {
        setLoading(false)
        setFieldError("uname", res.error.message);
      }
    }

    if (step === 1) {
      try {
        setLoading(true)
        const res = await verifyForgetPasswordApi({ otp: values.otp });
        if (res.success) {
          setLoading(false)
          dispatch(setToken(res.data.token));
          setStep(2);
        }
        if (!res.success) {
          setLoading(false)
          setFieldError("otp", res.error.message);
        }
      } catch (e) { }
    }

    if (step === 2) {
      try {
        setLoading(true)
        const res = await saveResetPasswordApi({
          password: values.password,
        });
        if (res.success) {
          setLoading(false)
          buttonRef.current.click();
        }
        if (!res.success) {
          setLoading(false)
          setFieldError("password", res.error.message);
        }
      } catch (e) { }
    }
  };

  const RenderComponent = SignUpConfig[step].component;

  return (
    <>
      <Formik
        innerRef={formikRef}
        initialValues={initialValue}
        validationSchema={SignUpConfig[step].validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, errors, touched }) => (
          <>
            <RenderComponent handleSubmit={handleSubmit} />
          </>
        )}
      </Formik>
      <a
        ref={buttonRef}
        data-bs-toggle="modal"
        data-bs-dismiss="modal"
        data-bs-target={"#passwordsuccessmodal"}
      />
      <Loader isLoading={isLoading} />
    </>
  );
};
