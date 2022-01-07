import * as yup from "yup";
import { FormTextInput } from "../../../../../Components/molecules/FormInput";
import { FORM_COMPONENT_WIDTH } from "../../../../../data/common";
import { PrimaryButton } from "../../../../../Components/atoms/Button";

export const ForgetPasswordStep1Schema = yup.object().shape({
  uname: yup
    .string("This field is required")
    .required("This field is required")
    .test("test-name", "Incorrect Email/Phone Number", function (value) {
      const emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
      let isValidEmail = emailRegex.test(value);
      let isValidPhone = phoneRegex.test(value);
      if (!isValidEmail && !isValidPhone) {
        return false;
      }
      return true;
    }),
});

export const ForgetPasswordStep1 = ({ handleSubmit }) => {
  return (
    <>
      <div className="modal-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div><h4 className="bold_500 blcktxtclr font18 text-center" style={{flex:1}}>
        Forgot Password?
    </h4>
      <span
        className="greytxtclr block font12 text-center"
        style={{ marginBottom: 30 }}
      >
        Enter your registered Email/Phone Number
      </span>
      <div className="modal-body">
        <div className="pb-3 mx-3">
          <FormTextInput
            width={FORM_COMPONENT_WIDTH}
            label={"Email Address or Phone Number"}
            placeholder={"Enter Email Address or Phone Number"}
            name={"uname"}
          />
          <PrimaryButton onClick={handleSubmit} label={"Send OTP"} />
          <div className="row mt-2">
            <span
              className="greytxtclr font12 block text-center"
              style={{ marginTop: 25 }}
            >
              Don't you have an account?
              <a
                href=""
                className="drkbluecolor bold_500 ms-2"
                data-bs-toggle="modal"
                data-bs-target="#RegModal"
                data-bs-dismiss="modal"
              >
                Register
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
