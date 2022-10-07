import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/new-logo.png";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="w-full container flex justify-between">
        <ul>
          <li>
            <Link to="/" className="brand">
              <img src={logo} alt="Quiz App" />
              <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">
                Quiz App
              </h3>
            </Link>
          </li>
        </ul>
        <Account />
      </div>
    </nav>
  );
}
