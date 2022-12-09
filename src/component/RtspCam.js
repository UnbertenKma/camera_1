import React, { useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";

const ffmpegIP = "localhost";

const RtspCam = () => {
  useEffect(() => {
    var videoUrl = `ws://${ffmpegIP}:6789/`;
    var player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });
    // console.log(player);
  });

  return (
    <div id="body">
      <div
        id="title"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "60px",
          color: "#000",
        }}
      >
        Player stream RTSP
      </div>
      <div
        id="video-canvas"
        style={{ height: "620px", width: "840px", display: "inline-block" ,textAlign: "center" , border: "20px #ccc solid"}}
      ></div>
    </div>
  );
};

export default RtspCam;
