import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Categ = () => {
  let bodyParts = ["NOSE", "TONGUE", "LEG", "HAND", "BACK"];
  let colors = ["RED", "BLACK", "BLUE", "WHITE", "PINK"];
  let animals = ["LION", "TIGER", "HORSE", "MONKEY", "CAT"];
  return (
    <div className="container">
      <div className="title">
        <p className="nameGameB">H</p> <p className="nameGameR">A</p>{" "}
        <p className="nameGameB">NGM</p>
        <p className="nameGameR">A</p> <p className="nameGameB">N</p>
      </div>
      <div className="home">
        <Link
          to={{ pathname: "/play", state: { myCateg: bodyParts } }}
          className="h1 lessSize"
        >
          <h1>bodyParts</h1>
        </Link>
        <Link
          to={{ pathname: "/play", state: { myCateg: colors } }}
          className="h1 lessSize"
        >
          <h1>colors</h1>
        </Link>
        <Link
          to={{ pathname: "/play", state: { myCateg: animals } }}
          className="h1 lessSize"
        >
          <h1>animals</h1>
        </Link>
      </div>
    </div>
  );
};

export default Categ;
