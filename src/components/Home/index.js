import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import bttn from "../../image/button.mp3";

const Home = () => {
  return (
    <div className="container">
      <audio className="btn" autoPlay="autoplay" src={bttn}></audio>

      <div className="title">
        <p className="nameGameB">H</p> <p className="nameGameR">A</p>{" "}
        <p className="nameGameB">NGM</p>
        <p className="nameGameR">A</p> <p className="nameGameB">N</p>
      </div>
      <div className="home">
        <Link to="/Categ" className="h1">
          <h1>Play</h1>
        </Link>
        <Link to="/howplay" className="h1">
          <h1>How to play</h1>
        </Link>
        <Link to="/about" className="h1">
          <h1>About</h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
