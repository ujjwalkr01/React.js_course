import { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const initialVal = {
  username: "",
  age: "",
};

const AddUsers = (props) => {
  // const [enteredUserInput, setEnteredUserInput] = useState(initialVal);
  const [error, setError] = useState();
  const usernameInput = useRef(initialVal.username);
  const userageInput = useRef(initialVal.age);

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(usernameInput);
    // console.log(userAgeInput);
    const enteredName = usernameInput.current.value;
    const enteredAge = userageInput.current.value;

    //  console.log(userAgeInput,userNameInput)
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    // console.log(enteredUserInput);
    // props.addNewUser(enteredUserInput);
    props.addNewUser(enteredName, enteredAge);
    // setEnteredUserInput(initialVal);

    /*here we have used the useRef hooks to mutate the object that is rendered but we should never mutate  with ref instead we should use useState hook*/
    usernameInput.current.value = "";
    userageInput.current.value = "";
  };

  /* All the commented part are used with useState Hooks */

  // const handleUserInput = (input, value) => {
  //   setEnteredUserInput((prevInput) => {
  //     return {
  //       ...prevInput,
  //       [input]: value,
  //     };
  //   });
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUserInput.username}
            // onChange={(event) =>
            //   handleUserInput("username", event.target.value)
            // }
            ref={usernameInput}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredUserInput.age}
            // onChange={(event) => handleUserInput("age", event.target.value)}
            ref={userageInput}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
