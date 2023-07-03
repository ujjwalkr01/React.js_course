import React from "react";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Grooming kit",
      amount: 2094.12,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 7999.49, date: new Date(2023, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 9940.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 1000.52,
      date: new Date(2023, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>

      {/* To use the custom component html elements we must start with uppercase as reacts applies the rule that element starting with lowercase are the built in html elements and the Uppercase are the custom elements created by the developer*/}
      <Expenses items={expenses}></Expenses>
    </div>
  );

  /*At the end JSX code is transformed into this way 
  --> when ever we write the jsx code the react.createElement() method  is called 
  -->so if we write two root element that means we are using return React.createElement() React.createElement and we know that we can return only one thing at time so it will give error and that's why it is required to use only root element and insert as many contents we want.
  ---> and this code looks difficult to  read adn maintain so we use JSx format and inner hood everythng is transformed
  */ 
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h2", null, `Let's get started`),
  //   React.createElement(Expenses, {items :  expenses })
  // );
}

export default App;
