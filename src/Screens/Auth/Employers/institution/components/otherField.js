import React from "react";
import { Checkbox } from "antd";
import { Tooltips2 } from "../../../../../Components/atoms/tooltips2";

export const OtherField = ({ onChange, isClicked, title }) => {
  return (
    <>
      <div className={"flex_row"} style={{ marginTop: 5 }}>
        <Checkbox onChange={onChange} checked={isClicked}>
          {title}
        </Checkbox>
        <Tooltips2
          label={"Please select others if desire options not in the list"}
          text={"i"} 
        />
      </div>
    </>
  );
};
