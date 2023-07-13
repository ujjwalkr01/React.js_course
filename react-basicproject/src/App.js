import { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [updateUserList, setUserList] = useState([]);

  // const handlingNewUser = (userDetail) => {
  //   setUserList((prevList) => {
  //     return [
  //       ...prevList,
  //       {
  //         name: userDetail.username,
  //         age: userDetail.age,
  //         id: Math.random().toString(),
  //       },
  //     ];
  //   });
  // };
  const handlingNewUser = (username,userage) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        {
          name: username,
          age: userage,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    // we can also use <Fragment></Fragment> instead of <></> but for fragment we just have to import the fragments from the react.
    <> 
      <AddUsers addNewUser={handlingNewUser} />
      {updateUserList.length !== 0 && <UsersList users={updateUserList} />}
    </>
  );
}

export default App;
