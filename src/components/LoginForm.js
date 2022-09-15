import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import From from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const history = useNavigate();

  async function handelLogin(e) {
    e.preventDefault();

    try {
      setError("Login Successfully! 😊😊");
      setLoading(true);
      await login(email, password);
      history("/");
    } catch (err) {
      // console.log(err);
      setLoading(false);
      setError("Login Failed! 😣😣");
    }
  }

  return (
    <From className="login" onSubmit={handelLogin}>
      <TextInput
        type="email"
        placeholder="Enter Your Email"
        icon="alternate_email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button disabled={loading} className="button" type="submit">
        <span>Log in</span>
      </Button>
      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account?
        <Link to="/signup">
          <span className="text-lime-500">Signup</span>
        </Link>
        instead.
      </div>
    </From>
  );
}
