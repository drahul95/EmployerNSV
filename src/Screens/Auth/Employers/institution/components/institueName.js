import React, { useCallback } from "react";
import { useField } from "formik";
import { checkInstituteNameApi } from "../../../../../apis/institutions";
import { InstituteInput } from "./instituteInput";

export const InstituteNameInput = ({ name, width, label, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue, setError } = helpers;

  const error = meta.touched && !!meta.error;


  const blur = useCallback(async () => {
    helpers.setTouched(true)
    try{
      const res = await checkInstituteNameApi({
        institute_name: field.value.toString().trim(),
      });
      if (!res.success && res.error) {
        setError(res.error.message);
      }
    }catch (e){
    }

  }, [helpers]);

  return (
    <div className={"form_wrapper_margin"}>
      {label && <label className="blcktxtclr bold_500 font12">{label}</label>}
      <InstituteInput
        value={field.value}
        onBlur={blur}
        onChange={(e) => setValue(e.target.value)}
        error={error}
        errorMsg={meta.error}
        style={{ width: width }}
        {...props}
      />
    </div>
  );
};
