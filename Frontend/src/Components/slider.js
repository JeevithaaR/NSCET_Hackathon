import React from "react";
import "../Styles/slider.css";
import img1 from "../Assests/ai.jpg";
import img2 from "../Assests/civ.jpg";
import img3 from "../Assests/cs.png";
import img4 from "../Assests/ece.png";
import img5 from "../Assests/eee.png";
import img6 from "../Assests/it.jpg";
import img7 from "../Assests/mec.jpeg";
import img8 from "../Assests/sh.png";

const Slider = () => {
  return (
    <div className="slider">
      <span style={{ "--i": 1 }}>
        <img src={img1} alt="Image 1" />
      </span>
      <span style={{ "--i": 2 }}>
        <img src={img2} alt="Image 2" />
      </span>
      <span style={{ "--i": 3 }}>
        <img src={img3} alt="Image 3" />
      </span>
      <span style={{ "--i": 4 }}>
        <img src={img4} alt="Image 4" />
      </span>
      <span style={{ "--i": 5 }}>
        <img src={img5} alt="Image 5" />
      </span>
      <span style={{ "--i": 6 }}>
        <img src={img6} alt="Image 6" />
      </span>
      <span style={{ "--i": 7 }}>
        <img src={img7} alt="Image 7" />
      </span>
      <span style={{ "--i": 8 }}>
        <img src={img8} alt="Image 8" />
      </span>
    </div>
  );
};

export default Slider;
