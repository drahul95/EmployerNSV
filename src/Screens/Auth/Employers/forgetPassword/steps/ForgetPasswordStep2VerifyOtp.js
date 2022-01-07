import React, { useEffect, useRef, useState } from "react";
import { Formik, useField } from "formik";
import { FormOtpInput } from "../../../../../Components/molecules/FormOtp";
import * as yup from "yup";
import { forgetPasswordRequestApi } from "../../../../../apis/auth";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../../../store/common/common";
import { PrimaryButton } from "../../../../../Components/atoms/Button";
import { store } from "../../../../../Redux/store";
import { SALT } from "../../../../../config/salt";
import Loader from './../../../../../Components/Loader';
const jwt = require("jsonwebtoken");

export const ForgetPasswordOtpValidationSchema = yup.object().shape({
  otp: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9\- ]{5,5}$/, " "),
});

export const ForgetPasswordOtpValidation = ({ handleSubmit }) => {
  const [field, meta, helpers] = useField("uname");
  const [field2, meta2, helpers2] = useField("otp");
  const [isResendVisible, setIsResendVisible] = useState(true);
  const dispatch = useDispatch();
  const { email, mobile, isd } = jwt.verify(
    store.getState().common.token,
    SALT
  );
  const fullPhoneNumber = `+${isd}${mobile}`;
  const [isLoading, setLoading] = useState(false)


  const sendOtp = async (values) => {
    try {
      setIsResendVisible(false);
      setLoading(true)
      const res = await forgetPasswordRequestApi({
        uname: email,
      });
      if (res.success) {
        setLoading(false)
        dispatch(setToken(res.data.token));
      }
    } catch (e) {}finally {
      setLoading(false)
      setTimeout(() => {
        setIsResendVisible(true);
      }, 1500);
    }
  };

  return (
    <>
      <div className="modal-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <h4
        className="bold_500 blcktxtclr font18 text-center"
        style={{ flex: 1 }}
      >
        Forgot Password?
      </h4>
      <span className="greytxtclr block font12 text-center">
        Enter your registered Email/Phone Number
      </span>
      <div className="modal-body">
        <div className="pb-3 mx-3">
          <div className={"flex_center"}>
            <label
              className="py-3  bold_400 font12"
              style={{ textAlign: "center", width: 350 }}
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
                    email.substring(email.indexOf("@"), email.length)}
              </span>
            </label>
          </div>
          <FormOtpInput name={"otp"} />
          <PrimaryButton
            type={"submit"}
            onClick={handleSubmit}
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
        </div>
      </div>
      <Loader isLoading={isLoading} />
    </>
  );
};
