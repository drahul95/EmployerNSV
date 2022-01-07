import React from "react";
import * as yup from "yup";
import { FormPasswordInput } from "../../../../../Components/molecules/FormPassword";
import { passwordRegExp } from "../../../../../data/regex";
import { FORM_COMPONENT_WIDTH } from "../../../../../data/common";
import { PrimaryButton } from "../../../../../Components/atoms/Button";
const jwt = require("jsonwebtoken");

export const ForgetPasswordStep3PasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("This field is required")
    .matches(passwordRegExp, " "),

  confirmPassword: yup
    .string().required("This field is required")
    .test("passwords-match", "Passwords do not match", function (value) {
      return this.parent.password === value;
    }),
});

export const ForgetPasswordStep3Password = ({ handleSubmit }) => {
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
        <h4 className="bold_500 blcktxtclr font18 text-center">
            Change Password
        </h4>
        <span className="greytxtclr block font12 text-center">
            Please enter a new password
          </span>
      <div className="modal-body">
        <div className="pb-3 mx-3">
            <div className={"flex_center"}>
              <label
                className="py-2  bold_400 font12"
                style={{ textAlign: "center", width: 350 }}
              ></label>
            </div>
            <FormPasswordInput
              width={FORM_COMPONENT_WIDTH}
              name={"password"}
              showSuggestion
              label={"New Password"}
              placeholder="Enter password"
            />
            <FormPasswordInput
              width={FORM_COMPONENT_WIDTH}
              placeholder={"Confirm New Password"}
              name={"confirmPassword"}
              label={"Confirm New Password"}
            />
            <PrimaryButton
              onClick={() => handleSubmit()}
              label={"Update Password"}
              style={{ marginTop: 15, height: 50, borderRadius: 10 }}
            />
          </div>
        </div>
    </>
  );
};
