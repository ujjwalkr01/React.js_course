import react, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    /*So whenever we depend on the previous state we should call an arrow function and pass the prevState as a parameter to keep the track of the prevState and return the new state... */

    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle: event.target.value}
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount: event.target.value}
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate: event.target.value}
    // });
  };

  /* if there are multiple handler of the same type we can also use a combine function to handle that events and to use this method we have to use the line 75 to pass the identifier and the value*/

  // const inputChangeHandler=(identifier,value)=>{
  //   if(identifier==='title'){
  //     setEnteredTitle(value);
  //   }else if(identifier==='amount'){
  //     setEnteredAmount(value);
  //   }else{
  //     setEnteredDate(value);
  //   }
  // }
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          {/* <input type="text" onChange={(event)=>inputChangeHandler('title',event.target.value)} /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
          {/* <input type="number" onChange={(event)=>inputChangeHandler('amount',event.target.value)} /> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2024-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {/* <input type="date" onChange={(event)=>inputChangeHandler('date',event.target.value)} /> */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
