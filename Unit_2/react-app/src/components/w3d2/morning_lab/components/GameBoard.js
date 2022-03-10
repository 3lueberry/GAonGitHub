import React, { useState } from "react";
import Card from "./Card";

const GameBoard = (props) => {
  const [prevCard, setPrevCard] = useState("");
  console.log(props.game);

  const playGame = (img, id) => {
    if (prevCard === "") setPrevCard({ img, id });
    else {
      setTimeout(() => {
        if (prevCard.img === img && prevCard.id !== id) {
          document.getElementById(prevCard.id).src = "";
          document.getElementById(id).src = "";
        } else {
          document.getElementById(prevCard.id).src = props.game[0].backgroundImage;
          document.getElementById(id).src = props.game[0].backgroundImage;
        }
        setPrevCard("");
      }, 1000);
    }
  };

  return (
    <>
      {props.game.map((d) => (
        <Card {...d} click={playGame} />
      ))}
    </>
  );
};

export default GameBoard;
