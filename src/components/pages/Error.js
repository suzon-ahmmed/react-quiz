import React from "react";
// import { Link } from "react-router-dom";
import image from "../../assets/images/error.svg"

export default function Error() {
  return (
    <div className="w-full h-[calc(100vh-250px)] flex flex-col justify-center items-center">
      <img src={image} alt="error" className="w-[70%] md:w-[40%] h-full object-fill"  />
      {/* <Link to='/'>
        <span>Back to Home</span>
      </Link> */}
    </div>
  );
}
