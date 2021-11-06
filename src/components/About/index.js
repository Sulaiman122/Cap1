import React from "react";
import "./style.css";
import backy from "../../image/pepar.png";
import bttn from "../../image/button.mp3";
import { useHistory } from "react-router";
import { FaArrowCircleLeft } from 'react-icons/fa';


const About = () => {
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
      <p id="backBTN" onClick={goBack}><FaArrowCircleLeft/>Back</p>

        <div className="abouty" style={{ backgroundImage: `url(${backy})` }}>
          
          <h2>About:</h2>
          <p className="about">
            This game was made by: <br />
          </p>
          <p className="names">
            Sulaiman Albulaihy
            <br />
            Ali Alyahya
            <br />
            Abdullah Aljumah
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
