import React, { useState, useRef } from "react";
import FormInput from "./FormInput";
import Label from "./Label";

const Top = (props) => {
  //   const initForm = [
  //     {
  //       name: "desc",
  //       label: "Desc :",
  //       placeHolder: "description",
  //       value: "",
  //       inputRef: useRef(),
  //     },
  //     {
  //       name: "price",
  //       label: "Price :",
  //       placeHolder: "expense cost",
  //       value: "S$",
  //       inputRef: useRef(),
  //     },
  //     {
  //       name: "date",
  //       label: "Date :",
  //       placeHolder: "YYYY-MM-DD",
  //       value: "",
  //       inputRef: useRef(),
  //     },
  //   ];

  //   const [formList, setFormList] = useState(initForm);

  const [desc, setDesc] = useState(props.desc);
  const descRef = useRef();

  const [price, setPrice] = useState(props.price);
  const priceRef = useRef();

  const [date, setDate] = useState(props.date);
  const dateRef = useRef();

  const handleChanges = (e) => {
    // const target = formList.find((d) => d.name === e.target.name);
    // if (
    //   (target.name === "price" &&
    //     e.target.value.split("$")[1] !== "" &&
    //     isNaN(Number.parseFloat(e.target.value.split("$")[1]))) ||
    //   (target.name === "date" && e.target.value !== "" && isNaN(Date.parse(e.target.value)))
    // )
    //   target.inputRef.current.focus();
    // else {
    //   setFormList((prevState) => {
    //     const target = prevState.find((d) => d.name === e.target.name);
    //     target.value = e.target.value;
    //     return [...prevState];
    //   });
    // }

    // const others = formList.filter(
    //   (d, i) => i !== formList.findIndex((d) => d.name === e.target.name)
    // );
    // setFormList([...others, target]);

    switch (e.target.name) {
      case "descInput":
        setDesc(e.target.value);
        break;

      case "priceInput":
        setPrice(e.target.value);
        break;

      case "dateInput":
        setDate(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempPrice = Number.parseFloat(price.split("$")[1]);
    let tempDate = new Date(date);

    if (desc === "") descRef.current.focus();
    else if (price === "" || isNaN(tempPrice)) priceRef.current.focus();
    else if (date === "" || isNaN(tempDate)) dateRef.current.focus();
    else {
      props.submit({ desc, price, date });
      setDesc(props.desc);
      setPrice(props.price);
      setDate(props.date);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* {formList.map((item) => {
          return (
            <div className="row" key={Math.random()}>
              <div className="col-sm-4">
                <Label {...item} />
              </div>
              <div className="col-sm-8">
                <FormInput {...item} handleChange={handleChanges} />
              </div>
            </div>
          );
        })} */}
        <div className="row">
          <div className="col-sm-4">
            <Label label="Desc :" />
          </div>
          <div className="col-sm-8">
            <FormInput
              name="descInput"
              placeHolder="description"
              inputRef={descRef}
              value={desc}
              handleChange={handleChanges}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Label label="Price :" />
          </div>
          <div className="col-sm-8">
            <FormInput
              name="priceInput"
              placeHolder="price"
              inputRef={priceRef}
              value={price}
              handleChange={handleChanges}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Label label="Date :" />
          </div>
          <div className="col-sm-8">
            <FormInput
              name="dateInput"
              placeHolder="yyyy-mm-dd"
              inputRef={dateRef}
              value={date}
              handleChange={handleChanges}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Top;
