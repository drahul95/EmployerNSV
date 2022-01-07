
import * as yup from "yup";
import { FormPasswordInput } from "../../../../../Components/molecules/FormPassword";
import { passwordRegExp } from "../../../../../data/regex";
import { FORM_COMPONENT_WIDTH } from "../../../../../data/common";
import { PrimaryButton } from "../../../../../Components/atoms/Button";
const jwt = require("jsonwebtoken");

export const PasswordValidationSchema = yup.object().shape({
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

export const Step4Password = ({
  name = "password",
  confirmPassword = "confirmPassword",
  handleSubmit,
}: {
  name?: string;
  confirmPassword?: string;
  handleSubmit: any;
}) => {

  return (
    <>
      <FormPasswordInput
        width={FORM_COMPONENT_WIDTH}
        name={name}
        showSuggestion
        label={"Enter Password"}
        placeholder="Enter password"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormPasswordInput
        width={FORM_COMPONENT_WIDTH}
        placeholder={"Reenter password"}
        name={confirmPassword}
        label={"Confirm Password"}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <PrimaryButton
        onClick={() => handleSubmit()}
        label={"Sign up"}
        style={{ marginTop: 15, height: 50, borderRadius: 10 }}
      />

      <div style={{ marginTop: 40, marginBottom: 10 }}>
        <div className="row mt-2">
          <span className="greytxtclr font12 block text-center">
            Already have an account?
            <a
              href=""
              className="drkbluecolor bold_500 ms-2"
              data-bs-toggle="modal"
              data-bs-target="#SignModal"
              data-bs-dismiss="modal"
            >
              Login
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
