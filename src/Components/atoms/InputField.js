import "./atom.css";
import * as React from "react";
import { Input as TextField } from "antd";

export const Input = ({ errorMsg, ...rest }) => {
  return (
    <>
      <div
        className={"brdrds8 lghtbluebg"}
        style={{
          border: errorMsg && rest.error ? "1px solid #df1e1f" : null,
        }}
      >
        <input
          bordered={false}
          className={
            "py-3 bold_500 lghtbluebg blcktxtclr brdrds8 form-control px-3 font14 input.ant-input ant-input-affix-wrapper nobrder"
          }
          {...rest}
        />
      </div>

      <div
        style={{
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        {errorMsg && rest.error && (
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
        )}
      </div>
    </>
  );
};
