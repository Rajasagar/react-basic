import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const expensesDate = new Date(2023, 5, 21);
  // const expenseTitle = "car Insurance";
  // const expenseAmount = 2987.78;
  // we are creating different varaible to store the month day year. and use as componets in below
  // const month = props.date.toLocaleString('en-US', {month: 'long'});
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  //creating useState
  const [title, setTitle]= useState(props.title) // title - variable and setTitle - updating function
  console.log('ExpenseItem evalated by React'); //  it will print how many times ExpenseItem is used in code.

  const clickHandler = () => {
    setTitle('Updated.!') // use updating function is update the value after it got click.
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* above variable use as month day year to store below div components  */}
      <ExpenseDate date={props.date} />
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Changes Title.!</button>
    </Card>
  );
}

export default ExpenseItem;
