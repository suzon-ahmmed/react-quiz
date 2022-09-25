import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Account() {
  const { currentUser, signout } = useAuth();
  return (
    <div className="account font-semibold">
      {currentUser ? (
        <>
          <span
            className="material-icons-outlined text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600"
            title="Account"
          >
            account_circle
          </span>

          <span className="font-semibold">{currentUser.displayName}</span>
          
          <span
            className="material-icons-outlined text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600"
            title="Logout"
            onClick={signout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">
            <div className="flex items-center">
              <span
                className="material-icons-outlined text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600 mr-1"
                title="Account"
              >
                account_circle
              </span>
              Signup
            </div>
          </Link>

          <Link to="/login">
            <div className="flex items-center">
              <span
                className="material-icons-outlined text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600 mr-1"
                title="Account"
              >
                login
              </span>
              Login
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
