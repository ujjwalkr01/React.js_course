import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredDate, selectFilteredDate] = useState("2020");

  const updateDateHandler = (selectedDate) => {
    console.log(selectedDate);
    selectFilteredDate(selectedDate);
  };

  const filteredArr = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredDate
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredDate}
          onUpdateDate={updateDateHandler}
        />
        <ExpensesChart expenses={filteredArr}/>
        <ExpensesList items={filteredArr} />
      </Card>
    </div>
  );
}

export default Expenses;
