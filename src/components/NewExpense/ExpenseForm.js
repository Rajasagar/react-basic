import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm =()=>{
    //document.getElementById('').addEventListener('click', (event) =>{})
    const [enteredTitle, setEnteredTitle]= useState('')
    const titlechangeHandler = (event)=>{
        // console.log(event.target.value);
        setEnteredTitle(event.target.value)
    }
    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }
    const [enteredDate, setEnteredDate] =  useState('')
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)

    }
    return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" onChange={titlechangeHandler} />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01"/>
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler} min="2012-01-01" max="2023-12-12" />
          </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    );
};

export default ExpenseForm