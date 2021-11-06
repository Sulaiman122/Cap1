import { React, useState, useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import image from "../../image/Untitled.png";
import image2 from "../../image/Untitled2.png";
import image3 from "../../image/Untitled3.png";
import image4 from "../../image/Untitled4.png";
import image5 from "../../image/Untitled5.png";
import image6 from "../../image/Untitled6.png";
import image7 from "../../image/Untitled7.png";
import correctSound from "../../image/correct.wav";
import incorrectSound from "../../image/incorrect.mp3";
import bttn from "../../image/button.mp3";

const Play = () => {
  const history = useHistory();
  const location = useLocation();
  const myCateg = location.state?.myCateg;
  let words = myCateg;
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  const [picIndex, setpicIndex] = useState(0);
  let amges = [image, image2, image3, image4, image5, image6, image7];

  const [dashes, setDashes] = useState("-".repeat(word.length));
  const [guesses, setguesses] = useState(7);
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let str;
  let correctSounds = document.getElementById("CorrectAudio");
  let wrongSounds = document.getElementById("IncorrectAudio");
  const play = (x) => {
    x.play();
  };
  const letterPressed = (index) => {
    document.getElementById(`${index}`).style.visibility = "hidden";
    if (word.includes(letters[index])) {
      play(correctSounds);
      str = dashes.split("");
      str[word.indexOf(letters[index])] = letters[index];
      setDashes(str.join(""));
    } else {
      play(wrongSounds);
      setguesses(guesses - 1);
      setpicIndex(picIndex + 1);
    }
  };

  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (seconds <= 0 || guesses <= 1) {
    setTimeout(() => {
      history.push("/lost");
    }, 500);
  }

  if (!dashes.includes("-")) {
    setTimeout(() => {
      history.push("/won");
    }, 500);
  }

  return (
    <div className="container">
      <audio className="btn" autoPlay="autoplay" src={bttn}></audio>
      <audio id="CorrectAudio">
        <source src={correctSound} />
      </audio>
      <audio id="IncorrectAudio">
        <source src={incorrectSound} />
      </audio>
      <div className="title">
        <p className="nameGameB">H</p> <p className="nameGameR">A</p>{" "}
        <p className="nameGameB">NGM</p>
        <p className="nameGameR">A</p> <p className="nameGameB">N</p>
      </div>
      <div className="homePlay ">
        <div className="play">
          <h4>Guesses left: {guesses - 1}</h4>
          <h4>Time: {seconds}</h4>
        </div>
        <div class="row">
          <div className="letters">
            {letters.map((letter, index) => {
              return (
                <>
                  <button
                    className="letter"
                    id={`${index}`}
                    onClick={() => letterPressed(index)}
                  >
                    {letter}
                  </button>
                </>
              );
            })}
          </div>
          <div className="container2">
            <h4 className="guess">{dashes}</h4>
            <img src={amges[picIndex]} className="imagegg" alt="hangman" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
