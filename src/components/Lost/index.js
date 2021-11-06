import React from "react";
import { Link } from "react-router-dom";
import "./stayle.css";
import imageLost from "../../image/horror.png";
import LostSound from "../../image/lost.mp3";

const Lost = () => {
  return (
    <div className="container">
      <audio src={LostSound} autoplay="autoplay"></audio>
      <div className="title">
        <p className="nameGameB">H</p> <p className="nameGameR">A</p>{" "}
        <p className="nameGameB">NGM</p>
        <p className="nameGameR">A</p> <p className="nameGameB">N</p>
      </div>
      <div className="homeResult">
        <div className="imageLost">
          <img src={imageLost} alt="scary" />
        </div>
        <div class="links">
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

export default Lost;
