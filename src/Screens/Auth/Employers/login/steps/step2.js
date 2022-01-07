import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import { FormOtpInput } from "./../../../../../Components/molecules/FormOtp";
import * as yup from "yup";
import { sendOtpApi, verifyEmailOtpApi } from "../../../../../apis/auth";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../../../store/common/common";
import { PrimaryButton } from "./../../../../../Components/atoms/Button";
import Loader from './../../../../../Components/Loader';
import CustomizedSnackbars from "./../../../../../Components/snackbars";


export const LoginEmailMobileOtpValidationSchema = yup.object().shape({
  otp: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9\- ]{5,5}$/, " "),
});

export const LoginEmailMobileOtpValidation = () => {
  const [isResendVisible, setIsResendVisible] = useState(true);
  const user = useSelector((state) => state.user);
  const formikRef = useRef(null);
  const dispatch = useDispatch();
  const { email, phone, isd } = user;
  const fullPhoneNumber = `+${isd}${phone}`;
  const [isLoading, setLoading] = useState(false)
  const [toastify, setToastify] = useState({
    message: "",
    variant: "success",
    open: false
  })


  const initialValue = {
    uname: "",
    password: "",
    serverError: "",
    otp: "",
  };

  useEffect(() => {
    sendOtp();
  }, []);

  const sendOtp = async (values) => {
    try {
      setIsResendVisible(false);
      setLoading(true)
      const res = await sendOtpApi({
        uname: email,
        resend_otp_type: "login",
        otp_type: "email",
      });
      if (res.success) {
        setToastify({
          ...toastify,
          message: res.data.message,
          variant: "success",
          open: true
        })
        setLoading(false)
        dispatch(setToken(res.data.token));
      } else {
        setToastify({
          ...toastify,
          message: res.error.message,
          variant: "error",
          open: true
        })
        setLoading(false)
      }
    } catch (e) {
    } finally {
      setTimeout(() => {
        setLoading(false)
        setIsResendVisible(true);
      }, 1500);
    }
  };

  const verifyOtp = async (values, formikHelpers) => {
    const { setFieldError } = formikHelpers;
    try {
      setLoading(true)
      const res = await verifyEmailOtpApi(
        (({ otp }) => ({
          otp: parseInt(otp),
        }))(values)
      );

      if (res.success) {
        console.log("res----------->", res);
        localStorage.setItem("jietoken", res.data.token);
        window.open("/dashboard","_self")
        setLoading(false)
      }
      if (!res.success) {
        setLoading(false)
        setFieldError("otp", res.error.message);
      }
    } catch (e) { }
  };


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToastify({
      ...toastify,
      open: false,
    });
  };



  return (
    <>
      <CustomizedSnackbars
        message={toastify.message}
        variant={toastify.variant}
        open={toastify.open}
        handleClose={handleClose}
      />
      <div
        className="modal fade invitejobmodal"
        id="twostepverifiModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="pb-3 mx-3">
                <h4 className="bold blcktxtclr pt-3 font18 text-center">
                  2 Step Verification
                </h4>
                <Formik
                  innerRef={formikRef}
                  initialValues={initialValue}
                  validationSchema={LoginEmailMobileOtpValidationSchema}
                  onSubmit={verifyOtp}
                >
                  {({
                    handleSubmit,
                    values,
                    setFieldValue,
                    touched,
                    errors,
                  }) => (
                    <div className={"screen"}>
                      <div className={"flex_center"}>
                        <label
                          className="py-3 greytxtclr bold_400 font12"
                          style={{ textAlign: "center" }}
                        >
                          Please enter the verfication code sent to
                          <br />
                          mobile no &nbsp;
                          <span className="blcktxtclr">
                            {fullPhoneNumber &&
                              fullPhoneNumber.length >= 10 &&
                              fullPhoneNumber.substring(0, 3) +
                              "*".repeat(fullPhoneNumber.length - 3) +
                              fullPhoneNumber.substring(
                                fullPhoneNumber.length - 3,
                                fullPhoneNumber.length
                              )}{" "}
                            and email&nbsp;
                            {email &&
                              email.length > 5 &&
                              email.includes("@") &&
                              email.substring(0, 3) +
                              "*".repeat(email.indexOf("@") - 3) +
                              email.substring(
                                email.indexOf("@"),
                                email.length
                              )}
                          </span>
                        </label>
                      </div>
                      <FormOtpInput name={"otp"} />
                      <PrimaryButton
                        type={"submit"}
                        onClick={handleSubmit}
                        label={"Verify"}
                        disabled={values.otp.length !== 5}
                      />

                      {/* <ErrorMessagCenter message={serverMessage && serverMessage} /> */}

                      <div className="row mt-2" onClick={() => sendOtp(values)}>
                        <span className="greytxtclr font12 block text-center">
                          <span
                            className="drkbluecolor bold_500 ms-2"
                            style={{
                              cursor: "pointer",
                              color: isResendVisible
                                ? "#2a5798"
                                : "rgba(0, 0, 0, 0.25)",
                            }}
                          >
                            Resend OTP
                          </span>
                        </span>
                      </div>
                    </div>
                  )}
                </Formik>
              </div>
            </div>
            <Loader isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};
