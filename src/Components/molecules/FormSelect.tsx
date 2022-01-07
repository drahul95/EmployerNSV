import React, { useCallback } from "react";
import { SelectField } from "../atoms";
import type { ISelectField } from "../atoms";
import InputLabel from "@material-ui/core/InputLabel";

import { useField } from "formik";
import { Merge } from "../../utils/utils";
import { FORM_COMPONENT_WIDTH } from "../../data/common";
import type { SelectProps } from "@material-ui/core/Select";

type InternalFormSelectProps = {
  name: string;
  showSuggestion?: boolean;
  label?: string;
  onChange?: Function;
};

export type IFormSelect = Merge<Partial<ISelectField>, InternalFormSelectProps>;

export type IFormSelectProps = Merge<IFormSelect, SelectProps>;

export const FormSelect = ({
  name,
  showSuggestion,
  options,
  label,
  ...props
}: IFormSelectProps) => {
  const [field, meta, helpers] = useField(name as any);

  const { setValue } = helpers;

  const error: boolean = meta.touched && !!meta.error;

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);
  }, [helpers]);

  const handleChange = (ix: any) => {
    setValue(ix.target.value);
  };

  return (
    <div className={"form_wrapper_margin"}>
      <InputLabel shrink id="demo-simple-select-placeholder-label-label">
        {label}
      </InputLabel>
      <SelectField
        onBlur={handleBlur}
        onChange={handleChange}
        error={error}
        options={options || []}
        value={field.value}
        errorMsg={meta.error}
        style={{ width: FORM_COMPONENT_WIDTH }}
        {...props}
      />
    </div>
  );
};
