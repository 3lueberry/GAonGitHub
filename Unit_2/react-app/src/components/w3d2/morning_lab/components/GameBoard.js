import React, { useState } from "react";
import Card from "./Card";

const GameBoard = (props) => {
  const [game, setGame] = useState(props.game);
  return (
    <>
      {game.map((d, i) => (
        <Card {...d} key={i} game={game} setGame={setGame} />
      ))}
    </>
  );
};

export default GameBoard;
