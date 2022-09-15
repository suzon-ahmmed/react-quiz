import React from "react";
import { Link } from 'react-router-dom';
import Button from "../Button";
import From from "../From";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Login to your account
      </h1>
      <div className="column">
        <Illustration />
        <From className="login">
          <TextInput
            type="text"
            placeholder="Enter Your Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button className="button"><span>Log in</span> </Button>

          <div className="info">
            Don't have an account? <Link to="/signup"> <span className="text-lime-500">Signup</span> </Link> instead.
          </div>
        </From>
      </div>
    </>
  );
}
