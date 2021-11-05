import React from "react";
import "./style.css";

const Howplay = () => {
  return (
     <div className="container">
     <div className="title">
       <p className="nameGameB">H</p> <p className="nameGameR">A</p>{" "}
       <p className="nameGameB">NGM</p>
       <p className="nameGameR">A</p> <p className="nameGameB">N</p>
     </div>
     <div className="homeResult">
       <div className="howtoplay">
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
