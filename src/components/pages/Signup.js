import React from "react";
import Illustration from "../Illustration";
import SignupFrom from "../SignupFrom";

export default function Signup() {
  return (
    <>
      <h1 className="text-xl sm:text-3xl px-4 dark:text-gray-200 font-semibold">Create an account</h1>
      <div className="column  h-full items-center">
        <Illustration />
        <SignupFrom />
        
      </div>
    </>
  );
}
