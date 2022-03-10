import React, { useState } from "react";

const Card = (props) => {
  const [image, setImage] = useState(props.backgroundImage);

  const flipUp = (e) => {
    if (image === props.cardImage) setImage(props.backgroundImage);
    else if (image === props.backgroundImage) {
      setImage(props.cardImage);
      props.click(props.cardImage, e.target.id);
    }
  };

  return (
    <>
      <img
        src={image}
        alt={`${props.rank} of ${props.suit}`}
        className={`${props.rank} ${props.suit}`}
        onClick={flipUp}
        style={{ cursor: "pointer" }}
        id={props.id}
      />
    </>
  );
};

export default Card;
