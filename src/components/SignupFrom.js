import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupFrom() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const history = useNavigate();

  async function handelSignup(e) {
    
    e.preventDefault();

    if (password !== conformPassword) {
      return setError("Password dose not match!");
    }
    try {
      setError("Signup Successfully! 😊😊");
      setLoading(true);
      await signup(email, password, username);
      history('/');
    } catch (err) {
        // console.log(err);
        setLoading(false);
        setError('Failed to sighup!');
    }
  }

  return (
    <Form className="signup" onSubmit={handelSignup}>
      <TextInput
        type="text"
        placeholder="Enter Your Name"
        icon="person"
        required
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextInput
        type="email"
        placeholder="Enter Your Email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
        value={conformPassword}
        onChange={(e) => {
          setConformPassword(e.target.value);
        }}
      />
      <CheckBox
        text="I agree to the Terms &amp; Conditions"
        required
        value={agree}
        onChange={(e) => {
          setAgree(e.target.value);
        }}
      />
      <Button disabled={loading} type='submit' className="button">
        <span>Submit Now</span>
      </Button>
      

      {error && <p className="error">{error}</p>}

      <div className="info dark:text-gray-200">
        Already have an account?{" "}
        <Link to="/login">
          <span className="text-lime-500 font-medium"> Login</span>
        </Link>{" "}
        instead.
      </div>
    </Form>
  );
}
