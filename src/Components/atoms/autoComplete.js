import React, { useState } from "react";
import { AutoComplete } from "antd";
import { COUNTRIES } from "../../data/country";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const AutoCompleteAtom = ({ options, onChange, value, props }) => {
  return (
    <Autocomplete
      onChange={onChange}
      id="combo-box-demo"
      className="BlueSelectDropdown"
      options={options}
      value={value}
      disabled
      getOptionLabel={(option) => option.value}
      classes={{
        paper: "autocomplatepapar",
      }}
      renderInput={(params) => {
        params.inputProps.className = "noborderinput font14";
        params.InputProps.className = "noBeforeAfter";
        params.InputProps.placeholder = "Select";
        return <TextField {...params} />;
    }}
      {...props}
    />
  );
};
