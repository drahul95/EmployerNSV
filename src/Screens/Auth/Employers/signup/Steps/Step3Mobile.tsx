import React, { useEffect, useState } from "react";
import { useField } from "formik";
import { FormOtpInput } from "../../../../../Components/molecules/FormOtp";
import * as yup from "yup";
import { sendOtpApi } from "../../../../../apis/auth";
import { useDispatch } from "react-redux";
import { setToken } from "../../../../../store/common/common";
import { PrimaryButton } from "../../../../../Components/atoms/Button";
import Loader from './../../../../../Components/Loader';

export const PhoneOtpValidationSchema = yup.object().shape({
  emailOtp: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9\- ]{5,5}$/, " "),
});

export const Step3MobileVerification = ({ handleSubmit }: any) => {
  const [field, meta, helpers] = useField("phone");
  const [field2, meta2, helpers2] = useField("mobileOtp");
  const [isResendVisible, setIsResendVisible] = useState(true);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    sendOtp();
  }, []);

  const sendOtp = async () => {
    try {
      setLoading(true)
      setIsResendVisible(false);
      const res = await sendOtpApi({
        uname: field.value,
        resend_otp_type: "signup",
        otp_type: "phone",
      });

      setLoading(false)
      dispatch(setToken(res.data.token));
    } catch (e) {
    } finally {
      setTimeout(() => {
        setLoading(false)
        setIsResendVisible(true);
      }, 1500);
    }
  };

  return (
    <>
      <div className={"flex_center"}>
        <label
          style={{ textAlign: "center" }}
          className="py-3 greytxtclr bold_400 font12"
        >
          Please enter the verfication code <br /> sent to &nbsp;
          <span className="blcktxtclr">
            {field.value &&
              field.value.length >= 10 &&
              field.value.substring(0, 3) +
              "*".repeat(field.value.length - 3) +
              field.value.substring(
                field.value.length - 3,
                field.value.length
              )}
          </span>
        </label>
      </div>
      <FormOtpInput name={"mobileOtp"} />

      <PrimaryButton
        onClick={() => handleSubmit()}
        label={"Verify"}
        disabled={field2.value.length !== 5}
      />

      <div className="row mt-2" onClick={() => sendOtp()}>
        <span className="greytxtclr font12 block text-center">
          <span
            className="drkbluecolor bold_500 ms-2"
            style={{
              cursor: "pointer",
              color: isResendVisible ? "#2a5798" : "rgba(0, 0, 0, 0.25)",
            }}
          >
            Resend OTP
          </span>
        </span>
      </div>
    </>
  );
};
