//it's best practise to put new components in new files so that we can have one file per component
/*A component in js is just a javascript function that returns the jsx Code.. 
-->return <div></div><div>June 24th 2023<div><h2>Car Insurance</h2></div>Rs 50000</div>; this will give an error as there must be only one root element per return statement
so we have to wrap all the div inside one parent component then it wil not give the error...

--> we can use dynamic data by adding the {} between the elements

*/
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  // const expenseDate=new Date(2023, 5,27);
  // const expenseTitle='Car Insurance';
  // const expensePrice=50000;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;
