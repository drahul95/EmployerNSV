import React from "react";
import OtpInput from "react-otp-input";
import { useField } from "formik";

export const FormOtpInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const error = meta.touched && !!meta.error;
  const { setValue } = helpers;

  return (
    <div className={"form_wrapper_margin"}>
      <OtpInput
        value={field.value}
        onChange={(e) => setValue(e)}
        numInputs={5}
        isInputNum={true}
        hasErrored={true}
        separator={<span> </span>}
        containerStyle={{ justifyContent: "space-between" }}
        inputStyle={{
          width: 60,
          height: 45,
          borderRadius: 7,
          backgroundColor: "#e7f1fd",
        }}
        {...props}
      />
      {error && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 7,
          }}
        >
          <span
            style={{
              display: "flex",
              color: "red",
              fontSize: 12,
              alignItems: "end",
            }}
          >
            {meta.error}
          </span>
        </div>
      )}
    </div>
  );
};
