import React from "react";
import "./style.css";
import bttn from "../../image/button.mp3";
import { useHistory } from "react-router";
import { FaArrowCircleLeft } from 'react-icons/fa';

const Howplay = () => {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="container">
      <audio className="btn" autoPlay="autoplay" src={bttn}></audio>

      <div className="title">
        <p className="nameGameB">H</p> <p className="nameGameR">A</p>{" "}
        <p className="nameGameB">NGM</p>
        <p className="nameGameR">A</p> <p className="nameGameB">N</p>
      </div>
      <div className="homeResult normalWidth">
        <div className="howtoplay">
          <p id="backBtn" onClick={goBack}><FaArrowCircleLeft/>Back</p>
          <h2>
            <strong>HOW TO PLAY</strong>
          </h2>
          <p>1- Choose any category you like</p>
          <p>2- Guess the word</p>
          <p>3-Take care of time and tries left</p>
        </div>
      </div>
    </div>
  );
};

export default Howplay;
