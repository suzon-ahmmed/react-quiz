import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 min-h-[70px] bg-white shadow flex flex-col-reverse md:flex-row items-center justify-center md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 mt-6 md:mt-0 sm:text-center dark:text-gray-400">
        © 2022
        <Link to="/" className="hover:underline ml-1">
          Quiz App™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/" className="mr-4 hover:underline md:mr-6">
            Licensing
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}
