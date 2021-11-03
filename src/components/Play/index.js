import React, { useEffect, useState } from "react";
import "./style.css";

const Play = () => {
  let words = ["NOSE", "TONGUE", "LEG", "HAND", "BACK"];
  const [word, setword] = useState(words[Math.floor(Math.random() * words.length)])
  const [dashes, setDashes] = useState("-".repeat(word.length));
  const [guesses, setguesses] = useState(5)
  let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let str;
  const letterPressed = (index) => {
    console.log('letter pressed in func ', letters[index]);
    console.log('index of pressed ', word.indexOf(letters[index]));

    if (word.includes(letters[index])) {
      str = dashes.split("");
      str[word.indexOf(letters[index])] = letters[index];
      setDashes(str.join(""));
    }else{
        setguesses(guesses-1)
        if(guesses-1==0){alert('Lost')}
    }
  };
  return (
    <div className="container">
      <div className="home">
        <div class="play">
          <div class="letters">
            {letters.map((letter, index) => {
              return (
                <>
                  <button
                    className="letter"
                    onClick={() => letterPressed(index)}
                  >
                    {letter}
                  </button>
                </>
              );
            })}
          </div>
          <p className="guess">{dashes}</p>
        </div>
      </div>
    </div>
  );
};

export default Play;
