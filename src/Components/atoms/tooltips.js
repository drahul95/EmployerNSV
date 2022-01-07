import React from "react";

export const Tooltips = ({ text, label }) => {
  return (
    <div className="tooltipdiv">
      <span className="text">
        {text ? text : "i"}
        <div className="tooltiphover">
          <span>{label}</span>
        </div>
      </span>
    </div>
  );
};
