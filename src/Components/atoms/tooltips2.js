import React from "react";

export const Tooltips2 = ({ text, label }) => {
  return (
    <div className="tooltipdiv2">
      <span className="text">
        {text ? text : "i"}
        <div className="tooltiphover">
          <span>{label}</span>
        </div>
      </span>
    </div>
  );
};
