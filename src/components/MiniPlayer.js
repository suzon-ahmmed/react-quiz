import React, { useRef, useState } from "react";
// import image from "../assets/images/3.jpg";
import ReactPlayer from "react-player/youtube";

export default function MiniPlayer({ id, videoTitle }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function togglePlayer() {
    if (!status) {
      buttonRef.current.classList.remove("floatingBtn");
      setStatus(true);
    } else {
      buttonRef.current.classList.add("floatingBtn");
      setStatus(false);
    }
  }

  return (
    <>
      <div
        className="miniPlayer floatingBtn"
        ref={buttonRef}
        onClick={togglePlayer}
      >
        <span className="material-icons-outlined open">
          {" "}
          play_circle_filled{" "}
        </span>
        <span className="material-icons-outlined close" onClick={togglePlayer}>
          {" "}
          close{" "}
        </span>

        <ReactPlayer
          className="player"
          url={videoUrl}
          width="300px"
          height="168px"
          playing={status}
          controls
        />
        {/* <img src={image} alt="" /> */}

        <p>{videoTitle}</p>
      </div>
    </>

    
  );
}
