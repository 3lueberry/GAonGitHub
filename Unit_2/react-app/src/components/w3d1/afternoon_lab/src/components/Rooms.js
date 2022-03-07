import React from "react";

const Rooms = (props) => {
  return (
    <>
      <div className={`${props.name} div-border`} id={`${props.name}-${props.id}`}>
        ${props.name}-${props.id}
      </div>
    </>
  );
};

export default Rooms;
