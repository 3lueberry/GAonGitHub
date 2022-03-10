import React from "react";
import Top from "./Top";
import FormInput from "./FormInput";
import Label from "./Label";

const Expenses = (props) => {
  return (
    <>
      {/* <div className="col-sm-4">
        <Label label={props.label} />
      </div>
      <div className="col-sm-8">
        <FormInput
          name="descInput"
          placeHolder="description"
          inputRef={descRef}
          value={desc}
          handleChange={handleChanges}
        />
      </div> */}
      <Top
        desc={props.desc}
        price={props.price}
        date={props.date}
        submit={(item) => props.clicked(item)}
      />
    </>
  );
};

export default Expenses;
