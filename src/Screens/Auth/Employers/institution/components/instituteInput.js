import "./atom.css";
import * as React from "react";
import { Input as TextField } from "antd";

export const InstituteInput = ({ errorMsg,error, ...rest }) => {
  return (
    <>
      <div
        className={"brdrds8 lghtbluebg"}
        style={{
          border: error&&errorMsg ? "1px solid #df1e1f" : null,
        }}
      >
        <TextField
          className={
            "py-3 bold_500 lghtbluebg blcktxtclr brdrds8 form-control px-3 font14 input.ant-input ant-input-affix-wrapper"
          }
          {...rest}
        />
      </div>

      {errorMsg&&error && (
        <div
          style={{
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <span
            style={{
              display: "flex",
              color: "#df1e1f",
              fontSize: 12,
              alignItems: "end",
            }}
          >
            {errorMsg}
          </span>
        </div>
      )}
    </>
  );
};
