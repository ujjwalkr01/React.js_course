import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const initialVal = {
  username: "",
  age: "",
};

const AddUsers = (props) => {
  const [enteredUserInput, setEnteredUserInput] = useState(initialVal);
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserInput.username.trim().length === 0 ||
      enteredUserInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredUserInput.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    // console.log(enteredUserInput);
    props.addNewUser(enteredUserInput);
    setEnteredUserInput(initialVal);
  };

  const handleUserInput = (input, value) => {
    setEnteredUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

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
            value={enteredUserInput.username}
            onChange={(event) =>
              handleUserInput("username", event.target.value)
            }
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserInput.age}
            onChange={(event) => handleUserInput("age", event.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
