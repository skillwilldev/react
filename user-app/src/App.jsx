import { useState, useEffect } from "react";
import UseForm from "./components/UserForm";
import UseList from "./components/UserList";

function getFromStore() {
  const itemList = localStorage.getItem('user-app');
  return itemList ? JSON.parse(itemList) : [];
}


function App() {
  const [users, setUsers] = useState(() => getFromStore());
  const [search, setSearch] = useState('');

  const filtredUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  })

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
      <UseForm addUser={addUser}
        search={search}
        setSearch={setSearch}
      />
      <UseList
        users={filtredUsers}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </div>

  );
};



export default App;