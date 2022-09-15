import React from "react";
import { Link } from 'react-router-dom';
import Button from "../Button";
import CheckBox from "../CheckBox";
import From from "../From";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1 className="text-xl sm:text-3xl font-semibold">Create an account</h1>
      <div className="column">
        <Illustration />
        <From className="signup">
          <TextInput type="text" placeholder="Enter Your Name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter Your Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <CheckBox text="I agree to the Terms &amp; Conditions" />
          <Button className="button">
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </From>
      </div>
    </>
  );
}
