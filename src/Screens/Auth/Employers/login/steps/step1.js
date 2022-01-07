import React, { useRef, useState } from "react";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import { FORM_COMPONENT_WIDTH } from "../../../../../data/common";
import { PrimaryButton } from "./../../../../../Components/atoms/Button";
import { Input } from "./../../../../../Components/atoms";
import { InputFieldPassword } from './../../../../../Components/atoms'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginApi } from "../../../../../apis/auth";
import { setToken } from "../../../../../store/common/common";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../../store/user/user";
import Loader from './../../../../../Components/Loader';

export const LoginStep1ValidationSchema = yup.object().shape({
  uname: yup
    .string("Enter your Email/Phone Number")
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
  password: yup.string().required("This field is required"),
});

export const LoginStep1 = () => {
  const buttonRef = useRef(null);
  const button2Ref = useRef(null);
  const button3Ref = useRef(null);
  const dispatch = useDispatch();
  const formikRef = useRef(null);
  const [isLoading, setLoading] = useState(false)
  const [inputType, setInputType] = useState("password");

  const initialValue = {
    uname: "",
    password: "",
    serverError: "",
    otp: "",
  };

  const handleClick = async (values, formikHelpers) => {
    const { setFieldError } = formikHelpers;
    try {
      setLoading(true)
      const res = await loginApi(
        (({ uname, password }) => ({ uname, password }))(values)
      );
      if (!res.success) {
        setLoading(false)
        if (
          res.error.message ===
          "Seems like you have forgotten your password. Would you like to reset?"
        ) {
          button3Ref.current.click();
        } else setFieldError("serverError", res.error.message);
      }
      if (res.success) {
        setLoading(false)
        dispatch(setUser(res.data));
        dispatch(setToken(res.data.token));
        buttonRef.current.click();
      }
    } catch (e) { }
  };

  return (
    <>
      <Formik
        innerRef={formikRef}
        initialValues={initialValue}
        validationSchema={LoginStep1ValidationSchema}
        onSubmit={handleClick}
      >
        {({ handleSubmit, values, setFieldValue, touched, errors }) => (
          <div className={"screen"}>
            <div className={"form_wrapper_margin"}>
              <label className="blcktxtclr bold_500 font12">
                {"Email or Phone Number"}
              </label>
              <Input
                value={values.uname}
                onChange={(val) => setFieldValue("uname", val.target.value)}
                placeholder={"Enter email or phone number"}
                error={
                  (errors.uname && touched.uname) ||
                  (errors.serverError && touched.serverError)
                }
                errorMsg={
                  errors.serverError && touched.serverError
                    ? true
                    : touched.uname && errors.uname
                }
                style={{ width: FORM_COMPONENT_WIDTH - 8 }}
              />
            </div>
            <a
              ref={button3Ref}
              data-bs-toggle={"modal"}
              data-bs-target={"#resetmodal"}
            //data-bs-dismiss={"modal"}
            />
            <div className={"form_wrapper_margin"}>
              <label className="blcktxtclr bold_500 font12">{"Password"}</label>
              <InputFieldPassword
                type={inputType}
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                error={
                  (touched.serverError && errors.serverError) ||
                  (errors.password && touched.password)
                }
                errorMsg={
                  errors.serverError && touched.serverError
                    ? true
                    : touched.password && errors.password
                      ? errors.password
                      : ""
                }
                style={{ width: FORM_COMPONENT_WIDTH - 8 }}
                placeholder={"Enter password"}
                suffix={
                  <div
                    onClick={() =>
                      setInputType(inputType === "text" ? "password" : "text")
                    }
                  >
                    {inputType === "text" ? <FiEyeOff /> : <FiEye />}
                  </div>
                }
              />
            </div>
            <div
              style={{
                marginTop: -20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {errors.serverError && errors.serverError.length > 0 && (
                <span
                  style={{
                    display: "flex",
                    color: "#df1e1f",
                    fontSize: 12,
                    alignItems: "end",
                  }}
                >
                  {errors.serverError}
                </span>
              )}
            </div>
            <PrimaryButton onClick={handleSubmit} label={"Login"} />
            <a
              ref={buttonRef}
              data-bs-toggle={"modal"}
              data-bs-target={"#twostepverifiModal"}
              data-bs-dismiss={"modal"}
            />
            {/*TODO:// button for forget password*/}
            <div className="col-12">
              <span className="greytxtclr font12 block text-center">
                <a
                  ref={button2Ref}
                  className="drkbluecolor bold_500 ms-2"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  data-bs-target={"#forgotmodal"}
                //data-bs-dismiss="modal"
                >
                  Forgot your password?
                </a>
              </span>
            </div>
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
            <div
              className="modal fade reset_modaldiv"
              id="resetmodal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog">
                <div className="modal-content">
                  <div className="modal-header" />
                  {/*<div className="modal-header">
                    TODO:// FIx
                    <button
                      type="button"
                      data-bs-toggle={"modal"}
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>*/}
                  <div className="modal-body px-5">
                    <div className="text-center">
                      <span className="font12 block text-center mb-3 greytxtclr">
                        Seems like you have forgotten your password! Please
                        reset to continue.
                      </span>
                      <button
                        type="button"
                        className="btn whitecolor darkbluebg py-3 brdrds8 font12 mb-2 width_full"
                        data-bs-toggle="modal"
                        data-bs-target="#forgotmodal"
                        data-bs-dismiss="modal"
                      >
                        Reset you password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>

      <Loader isLoading={isLoading} />
    </>
  );
};
