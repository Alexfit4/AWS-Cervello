import React from "react";
import Video from "./Assets/pexels-kelly-lacy-6618037.mp4";
import ReactPlayer from "react-player";
export default function Main() {
 
  return (
    <div className="w-full">
      <ReactPlayer
        url="https://cervellovids.s3.amazonaws.com/pexels-kelly-lacy-6618037.mp4"
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        className="w-full"
        width="100%"
        height="100%"
      />
    </div>
  );
}


 