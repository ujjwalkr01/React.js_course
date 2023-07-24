import React, { useEffect, useState } from "react";
import { signUpFormValidation } from "./utils/validation";

const App = () => {
  const initialVal = {
    name: "",
    email: "",
    password: "",
    consent: false,
  };

  const [userInfo, setUserInfo] = useState(initialVal);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    if (isError !== "") {
      setIsError(signUpFormValidation(userInfo));
    }
  }, [userInfo]);

  const handleUserInput = (event) => {
    console.log(event.target.value);
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log(userInfo);
    if (signUpFormValidation(userInfo) !== null) {
      setIsError(signUpFormValidation(userInfo));
    }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <label htmlFor="name">Username: </label>
      <input
        id="name"
        type="text"
        value={userInfo.name}
        onChange={handleUserInput}
      />
      {isError.name !== undefined ? <p>{isError.name}</p> : null}
      <br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        value={userInfo.email}
        onChange={handleUserInput}
      />
      {isError.email !== undefined ? <p>{isError.email}</p> : null}
      <br />
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        value={userInfo.password}
        onChange={handleUserInput}
      />
      {isError.password !== undefined ? <p>{isError.password}</p> : null}
      <br />
      <label htmlFor="consent">Pls accept terms and condition</label>
      <input type="checkbox" id="consent" />

      <br />
      <button type="submit">Signup</button>
    </form>
  );
};

export default App;
