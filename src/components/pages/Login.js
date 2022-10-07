import React from "react";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

export default function Login() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl px-4 dark:text-gray-200 font-semibold">
        Login to your account
      </h1>
      <div className="column h-full items-center">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}
