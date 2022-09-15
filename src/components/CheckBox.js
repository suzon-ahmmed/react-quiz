import React from "react";

export default function CheckBox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span className="ml-1">{text}</span>
    </label>
  );
}
