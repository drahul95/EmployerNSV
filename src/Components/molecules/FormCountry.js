import React, { useCallback } from "react";
import { useField } from "formik";
import { AutoCompleteAtom } from "../atoms/autoComplete";
import { COUNTRIES } from "../../data/country";

export const FormCountry = ({ name, name2, width, label, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const [field2, meta2, helpers2] = useField(name2);

  const error = meta.touched && meta.error;

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);
  }, [helpers]);
console.log("field------>", field);
  return (
    <div className={"form_wrapper_margin"}>
      {label && <label className="blcktxtclr bold_500 font12">{label}</label>}
      <AutoCompleteAtom
        value={field}
        options={COUNTRIES.data}        
        onChange={(res, o) => {
          helpers.setValue(o.name);
          helpers2.setValue(`+${o.phonecode}`);
        }}
      />
    </div>
  );
};
