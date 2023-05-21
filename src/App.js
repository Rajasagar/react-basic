import './App.css';
import Expense from './components/Expense';
import ExpenseItem from "./components/ExpenseItem"
import React from 'react'
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //you always create one element which then may have more child elements.
  //So that's why we have this one wrapper root JSX element below one React.createElement and below to
  //below is <div> 3 attribute h2 , p , expenses </div>

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "lets get started!"),
    React.createElement("p",{},"This is visiable"),
    React.createElement(Expense, {items: expenses}) // above code what we create is old way 
    // of creating jsx code or alternative of jsx code what we create below it will work same it is
    // not easy reading or understanding it , we have Import React from 'react' in all .js files to run above code.

    // this is jsx code what we write below but in the brower it will go just like HTML.
    // jsx code not be there it will convert but not shown on the brower.
    // <div>
    //   <h2>lets get started!</h2>
    //   <p>This is visiable</p>
    //   <Expense items={expenses} />
    // </div>

    //  {/* above code is shorter version of expenseitem what we created. below
    //  basically we created new components and store all the details in Expense.js componets and add css to it and bring items attribute with expenses what we define as an array.  */}

    //   {/* <ExpenseItem
    //     title={expenses[0].title}
    //     amount={expenses[0].amount}
    //     date={expenses[0].date}
    //   />
    //   <ExpenseItem
    //     title={expenses[1].title}
    //     amount={expenses[1].amount}
    //     date={expenses[1].date}
    //   />
    //   <ExpenseItem
    //     title={expenses[2].title}
    //     amount={expenses[2].amount}
    //     date={expenses[2].date}
    //   />
    //   <ExpenseItem
    //     title={expenses[3].title}
    //     amount={expenses[3].amount}
    //     date={expenses[3].date}
    //   /> */}
  );
};

export default App;
