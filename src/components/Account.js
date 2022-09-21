import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Account() {
  const { currentUser, signout } = useAuth();
  return (
    <div className="account font-semibold">
      {currentUser ? (
        <>
          <span className="material-icons-outlined text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600" title="Account">
            account_circle
          </span>

          <span className="font-semibold">{currentUser.displayName}</span>
          <span className="material-icons-outlined text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600" title="Logout" onClick={signout}>
            logout
          </span>
        </>
      ) : (
        <>
          <span className="material-icons-outlined text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600" title="Account">
            account_circle
          </span>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
