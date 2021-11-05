import React from "react";
import "./style.css";
import backy from '../../image/pepar.png'

const About = () => {
  return (
    <div className="container">
      <div className="title">
        <p className="nameGameB">H</p> <p className="nameGameR">A</p>{" "}
        <p className="nameGameB">NGM</p>
        <p className="nameGameR">A</p> <p className="nameGameB">N</p>
      </div>
      <div className="homeResult">
        <div className="abouty"  style={{backgroundImage:`url(${backy})`}}>
          <h2>About:</h2>
          <p className="about">
            This game was made by: <br/>Sulaiman Albulaihy, Ali Alyahya, Abdullah
            Aljumah
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
