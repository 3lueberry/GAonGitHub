// import React, { useEffect, useRef, useState } from "react";
import React from "react";

const Card = ({ game, setGame, ...props }) => {
  // const [image, setImage] = useState(props.flipped ? props.cardImage : props.backgroundImage);
  // const cardRef = useRef();

  const flipUp = (e) => {
    const prevCard = game.find((c) => c.flipped);
    if (prevCard !== undefined && prevCard.id === e.target.id) return;

    const currCard = game[e.target.id];
    console.log(game[e.target.id], game[props.id]);

    setGame((prevState) => {
      currCard.flipped = true;
      // prevState.splice(id, 1, currCard);
      const newState = prevState.map((c) => {
        console.log(c.id, e.target.id);
        return c.id === e.target.id ? currCard : c;
      });
      return newState;
    });
    if (prevCard !== undefined) {
      console.log("checking");
      setTimeout(() => {
        setGame((prevState) => {
          if (prevCard.cardImage === currCard.cardImage) {
            prevCard.removed = true;
            currCard.removed = true;
          }
          prevCard.flipped = false;
          currCard.flipped = false;
          // prevState.splice(prevCard.id, 1, prevCard);
          // prevState.splice(currCard.id, 1, currCard);
          const newState = prevState.map((c) => {
            if (c.id === prevCard.id) return prevCard;
            else if (c.id === e.target.id) return currCard;
            else return c;
          });
          return newState;
        });
      }, 1000);
    }
  };

  // useEffect(() => {
  //   console.log("Flipped");
  // }, [image]);

  return (
    <>
      <img
        src={props.flipped ? props.cardImage : props.backgroundImage}
        // ref={cardRef}
        // alt={`${props.rank} of ${props.suit}`}
        alt="matched"
        className={`${props.rank} ${props.suit}`}
        onClick={flipUp}
        // onClick={props.click}
        style={{ cursor: "pointer", visibility: `${props.removed ? "hidden" : "visible"}` }}
        id={props.id}
      />
    </>
  );
};

export default Card;
