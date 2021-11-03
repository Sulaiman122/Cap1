import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="container">
      <div className="home">
        <h1><Link to="/play">Play</Link></h1> <h1 className="h1_2">How to play</h1> <h1>About</h1>
      </div>
    </div>
  );
};

export default Home;
