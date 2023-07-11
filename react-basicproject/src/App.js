import { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [updateUserList, setUserList] = useState([]);

  const handlingNewUser = (userDetail) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        {
          name: userDetail.username,
          age: userDetail.age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUsers addNewUser={handlingNewUser} />
      {updateUserList.length!==0 && <UsersList users={updateUserList} />}
    </div>
  );
}

export default App;
