import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const nameInputRef = useRef();
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // useEffect(() => {
  //   if (enteredNameisValid) {
  //     console.log("Input name is valid!");
  //   }
  // }, [enteredNameisValid]);

  const enteredNameisValid = enteredName !== "";
  const nameInputisInvalid = !enteredNameisValid && enteredNameTouched;
  let formIsValid = false;

  if (enteredNameisValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    //For everyKeyStroke...
    setEnteredName(event.target.value);
    // console.log(enteredName);
    // if (event.target.value !== "") {
    //   setEnteredNameisValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    // if (enteredName === "") {
    //   setEnteredNameTouched(true);
    // }
    setEnteredNameTouched(true);
  };

  const onFormSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameisValid) {
      // setEnteredNameisValid(false);
      return;
    }
    console.log(enteredName);

    //For final submission we use ref and we must not manipulate the dom with useRef hook its not a great idea
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    // nameInputRef.current.value = "";

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClass = nameInputisInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onFormSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputisInvalid && (
          <p className="error-text">Name can't be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
