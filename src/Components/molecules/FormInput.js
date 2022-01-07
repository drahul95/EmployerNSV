import React, { useCallback } from "react";
import { Input } from "../atoms";
import { useField } from "formik";
import { FORM_COMPONENT_WIDTH } from "../../data/common";

export const FormTextInput = ({ name, width, label, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const error = meta.touched && meta.error;

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);
  }, [helpers]);

  return (
    <div className={"form_wrapper_margin"}>
      {label && <label className="blcktxtclr bold_500 font12">{label}</label>}
      <Input
        value={field.value}
        onBlur={handleBlur}
        onChange={field.onChange(name)}
        error={error}
        errorMsg={meta.error}
        style={{ width: width ? width - 8 : FORM_COMPONENT_WIDTH - 8 }}
        {...props}
      />
    </div>
  );
};
