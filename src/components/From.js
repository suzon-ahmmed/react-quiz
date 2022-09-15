import React from "react";

export default function From({ children, className, ...rest }) {
  return (
    <form className={`${className} form`} action="#" {...rest}>
      {children}
    </form>
  );
}
