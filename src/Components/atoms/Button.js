import React from "react";
import { Button } from "antd";

export const PrimaryButton = ({ onClick, label, ...props }) => {
  return (
    <Button
      className="btn submit-btn py-3 brdrds8 font12 mb-3 width_full"
      onClick={() => onClick()}
      style={{
        marginTop: 15,
        height: 50,
        borderRadius: 10,
      }}
      {...props}
    >
        <span className={'font12'}>{label}</span>
    </Button>
  );
};
