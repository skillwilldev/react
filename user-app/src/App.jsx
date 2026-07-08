import { useState, useEffect } from "react";
import UseForm from "./components/UserForm";
import UseList from "./components/UserList";

function getFromStore() {
  const itemList = localStorage.getItem('user-app');
  return itemList ? JSON.parse(itemList) : [];
}


function App() {
  const [users, setUsers] = useState(() => getFromStore());

  useEffect(() => {
    localStorage.setItem('user-app', JSON.stringify(users));
  }, [users])

  const addUser = (user) => {
    setUsers([
      ...users,
      {
        id: Date.now(),
        ...user,
      },
    ]);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));

  };
  const updateUser = (updateUser) => {
    setUsers(
      users.map((user) =>
        user.id === updateUser.id ? updateUser : user)
    )
  };
  return (
    <div className="container">
      <h1>Crud app</h1>
      <UseForm addUser={addUser} />
      <UseList
        users={users}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </div>

  );
};



export default App;