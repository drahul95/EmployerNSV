import React from "react";
import { FormTextInput } from "./../../../../../Components/molecules/FormInput";
import * as yup from "yup";
import { useField } from "formik";
import { FORM_COMPONENT_WIDTH } from "../../../../../data/common";
import { PrimaryButton } from "../../../../../Components/atoms/Button";
import { FormCountry } from "../../../../../Components/molecules/FormCountry";
import {FormTextInputNumber} from "../../../../../Components/molecules/FormInputNumber";

export const Step1ValidationSchema = yup.object().shape({
  legalentityName: yup
    .string()
    .trim()
    .required(`This field is required`),
  phone: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9\- ]{10,10}$/, "Invalid mobile number"),
  email: yup
    .string()
    .trim()
    .required("This field is required")
    .email("Invalid email ID"),
});

export const Step1 = ({ handleSubmit }: any) => {
  const [field, meta, helpers] = useField("phone");
  return (
    <>
      <FormTextInput
        width={FORM_COMPONENT_WIDTH}
        label={"Name of the Legal Entity"}
        placeholder={"Name of the Legal Entity"}
        name={"legalentityName"}
      />
      <div style={{ marginBottom: 10 }}>
        <FormCountry
          name={"country"}
          name2={"countrycode"}
          label={"Country"}
          width={FORM_COMPONENT_WIDTH}
        />
      </div>
      <div className={"form_wrapper_margin"}>
        <label className="blcktxtclr bold_500 font12">
          Contact Person Mobile Number
        </label>
        <div
          className={"flex_row justify_space_between"}
          style={{ alignItems: "flex-start" }}
        >
          <div>
            <FormTextInput
              width={FORM_COMPONENT_WIDTH}
              label={""}
              name={"countrycode"}
              style={{ width: 60, marginRight: 10 }}
              disabled
            />
          </div>
          <FormTextInputNumber
            width={FORM_COMPONENT_WIDTH - 80}
            label={""}
            placeholder={"Enter Phone Number"}
            name={"phone"}
          />
        </div>
      </div>
      <div className={"form_wrapper_margin"}>
        <FormTextInput
          width={FORM_COMPONENT_WIDTH}
          label={"Contact Person Email id"}
          name={"email"}
          placeholder={"Enter Email Id"}
        />
      </div>
      <PrimaryButton onClick={() => handleSubmit()} label={"Next"} />
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
    </>
  );
};
