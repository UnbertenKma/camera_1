import React from "react";
import img1 from "../component/img/testcameimg.png";
import "./LiveCam.css";

import { useLocation } from "react-router-dom";
import RtspCam from "./RtspCam";

const LiveCam = () => {
  const location = useLocation();
  // const datas = location.state.data;

  return (
    <div className="wrapper">
      {/* <h1 className="wrapper__title">Livestream Camera</h1> */}

      <div>
        <RtspCam />
      </div>
      {/* <img src={img1} className="wrapper__img"></img> */}
      <div>
        {/* {location.state.map((data) => (
          <div key={data.id}>
            <h1>{data.description}</h1>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default LiveCam;
