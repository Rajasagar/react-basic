import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm =(props)=>{ 
    // we are setting the props now. 
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

    // handle the submit when we provide input to something in required field
    const submitHandler = (event) =>{
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      };

      //console.log(expenseData)
      props.onSaveExpenseData(expenseData) // we are passing above data to pass as an arguments 
      //and will be there to child NewExpense.js where we use this as function point to get/recived as parameter the data for there need.
      //two way binding thats means we remove the value after it store somewhere 
      //and delete from input value. and we have to put value={} in  input element in jsx code.
      
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    };


    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titlechangeHandler} />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2012-01-01" max="2023-12-12" />
          </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    );
};

export default ExpenseForm