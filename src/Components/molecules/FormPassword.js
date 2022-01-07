import React, { useCallback, useState } from "react";
import { Input } from "../atoms";
import { useField } from "formik";
import { PASSWORD_REGEX } from "../../data";
import { FORM_COMPONENT_WIDTH } from "../../data/common";
import { FiEyeOff, FiEye } from "react-icons/fi";

export const FormPasswordInput = ({
  name,
  width,
  label,
  showSuggestion = false,
  ...props
}) => {
  const [inputType, setInputType] = useState("password");
  const [field, meta, helpers] = useField(name);

  const error = meta.touched && meta.error;

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);
  }, [helpers]);

  return (
    <div className={"form_wrapper_margin"}>
      {label && <label className="blcktxtclr bold_500 font12">{label}</label>}
      <Input
        onBlur={handleBlur}
        type={inputType}
        onChange={field.onChange(name)}
        error={error}
        errorMsg={meta.error}
        style={{ width: width ? width - 8 : FORM_COMPONENT_WIDTH - 8 }}
        suffix={
          <div
            onClick={() =>
              setInputType(inputType === "text" ? "password" : "text")
            }
          >
            {inputType === "text" ? <FiEyeOff /> : <FiEye />}
          </div>
        }
        {...props}
      />
      {showSuggestion && (
        <div
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <ul>
            {PASSWORD_REGEX.map((reg, i) => (
              <li
                style={{
                  width: "50%",
                  color:
                    meta.value.length === 0
                      ? "#707070"
                      : reg.regEx.test(meta.value)
                      ? "green"
                      : "red",
                  fontSize: 10,
                }}
              >
                <span
                  style={{
                      fontSize:12,
                    color:
                      meta.value.length === 0
                        ? "#e7f1fd"
                        : reg.regEx.test(meta.value)
                        ? "green"
                        : "red",
                  }}
                >
                  &#9679;
                </span>{" "}
                {reg.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
