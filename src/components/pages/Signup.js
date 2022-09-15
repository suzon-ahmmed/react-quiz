import React from "react";
import Illustration from "../Illustration";
import SignupFrom from "../SignupFrom";

export default function Signup() {
  return (
    <>
      <h1 className="text-xl sm:text-3xl font-semibold">Create an account</h1>
      <div className="column">
        <Illustration />
        
        <SignupFrom />
        
      </div>
    </>
  );
}
