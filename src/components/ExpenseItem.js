import './ExpenseItem.css';
function ExpenseItem(props) {
            // const expensesDate = new Date(2023, 5, 21);
            // const expenseTitle = "car Insurance";
            // const expenseAmount = 2987.78;
            // we are creating different varaible to store the month day year. and use as componets in below
            const month = props.date.toLocaleString('en-US', {month: 'long'});
            const day = props.date.toLocaleString("en-US", { day: "2-digit" });
            const year = props.date.getFullYear();
           

    return (
      <div className="expense-item">
        {/* above variable use as month day year to store below div components  */}
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        {/* <div>{props.date.toISOString()}</div> */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
}

export default ExpenseItem;