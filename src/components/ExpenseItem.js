import './ExpenseItem.css';
function ExpenseItem(props) {
            // const expensesDate = new Date(2023, 5, 21);
            // const expenseTitle = "car Insurance";
            // const expenseAmount = 2987.78;
    return (
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
}

export default ExpenseItem;