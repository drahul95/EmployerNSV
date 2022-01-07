import React, { useMemo } from "react";
import { MenuItem, Typography } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import type { SelectProps } from "@material-ui/core/Select";
import { Merge } from "../../utils/utils";

type IOptions = {
  name: string;
};

export type ISelectField = {
  errorMsg?: string;
  options: IOptions[];
};

export const SelectField = ({
  errorMsg,
  options,
  ...rest
}: Merge<ISelectField, SelectProps>) => {
  const renderItem = useMemo(
    () => (item: IOptions, index?: number) => {
      return (
        <MenuItem key={`${item.name}-${index}`} value={item.name}>
          {item.name}
        </MenuItem>
      );
    },
    []
  );

  return (
    <>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        {...rest}
      >
        {options.map((item: IOptions, i: number) => renderItem(item, i))}
      </Select>
      <div
        style={{
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        {errorMsg && (
          <span
            style={{
              display: "flex",
              color: "red",
              fontSize: 12,
              alignItems: "end",
            }}
          >
            {errorMsg}
          </span>
        )}
      </div>
    </>
  );
};
