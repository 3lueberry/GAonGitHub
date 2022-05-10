import React, { useState } from "react";
// import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

// const StyledContainer = styled.div`
//   width: 90%;
//   max-width: 760px;
//   margin: 30px auto;

//   .separator {
//     margin: 30px;
//     border: 2px solid rgb(240, 240, 240);
//   }
// `;

const Main = () => {
  const [expenseList, setExpenseList] = useState([]);
  const today = new Date().toISOString().split("T")[0];
  const [newExpense, setNewExpense] = useState({ description: "", price: 0, date: today });

  return <>{/* <StyledContainer></StyledContainer> */}</>;
};

export default Main;
