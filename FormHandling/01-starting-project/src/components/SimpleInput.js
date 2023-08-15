import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  // const nameInputRef = useRef();
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // useEffect(() => {
  //   if (enteredNameisValid) {
  //     console.log("Input name is valid!");
  //   }
  // }, [enteredNameisValid]);

  const enteredNameisValid = enteredName !== "";
  const nameInputisInvalid = !enteredNameisValid && enteredNameTouched;
  let formIsValid = false;

  if (enteredNameisValid && enteredEmail) {
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

  /*------------- For email input handling -----------*/

  const enteredEmailisValid = enteredEmail !== "" && enteredEmail.includes("@");

  let errorMsg = `Email can't be empty!`;

  if (!enteredEmail.includes("@") && enteredEmail !== "") {
    errorMsg = `pls enter the valid email!`;
  }
  const emailInputisInvalid = !enteredEmailisValid && enteredEmailTouched;

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const onFormSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameisValid) {
      // setEnteredNameisValid(false);
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    //For final submission we use ref and we must not manipulate the dom with useRef hook its not a great idea
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    // nameInputRef.current.value = "";

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClass = nameInputisInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputisInvalid
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
      <div className={emailInputClass}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputisInvalid && <p className="error-text">{errorMsg}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
