import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm =()=>{
    //document.getElementById('').addEventListener('click', (event) =>{})

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate: ''
    // }); // uses all the useState in one places

    const [enteredTitle, setEnteredTitle]= useState('')
    const titlechangeHandler = (event)=>{
        // console.log(event.target.value);
        setEnteredTitle(event.target.value)
        //use other way to store the value when we combing the useState as one
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState)=>{
        //   return {...prevState, enteredTitle: event.target.value}
        // })
    };

    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput, //spread operater to get other value what we miss when we takes an object,pulls out all the key value pairs,
        //                  //and adds them to this new object. And then we can still override key value pairs like in this case enter title.
        //                  //And by doing it like this,we ensure that the other values aren't thrown away,
        //     enteredAmount: event.target.value
        // });
    };

    const [enteredDate, setEnteredDate] =  useState('')
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

    };
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