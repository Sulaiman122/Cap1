import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import imgaeWon from "../../image/youWon.png";
import winSound from "../../image/win.mp3";

const Won = () => {
  return (
    <div className="container">
      <audio src={winSound} autoplay="autoplay"></audio>
      <div className="title">
        <p className="nameGameB">H</p> <p className="nameGameR">A</p>{" "}
        <p className="nameGameB">NGM</p>
        <p className="nameGameR">A</p> <p className="nameGameB">N</p>
      </div>
      <div className="homeResult">
        <img className="wonImage" src={imgaeWon} alt="won" />
        <div className="links">
          <h1>
            <Link to="/Categ" className="LinkResult">
              Try Again
            </Link>
          </h1>
          <h1>
            <Link to="/" className="LinkResult less">
              Go Home
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Won;
