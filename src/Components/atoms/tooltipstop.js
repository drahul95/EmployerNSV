import React from "react";

export const TooltipsTop = ({ text, label }) => {
  return (
    <div className="tooltipdivTop">
      <span className="text">
        {text ? text : "i"}
        <div className="tooltiphover">
          <span>{label}</span>
        </div>
      </span>
    </div>
  );
};
