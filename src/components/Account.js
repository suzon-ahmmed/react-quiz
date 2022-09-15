import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Account() {
  const { currentUser, signout } = useAuth();
  return (
    <div className="account font-semibold">
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>

          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" title="Logout" onClick={signout}>
            logout
          </span>
        </>
      ) : (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
