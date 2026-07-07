import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers([
      ...users,
      {
        id: Date.now(),
        ...user
      }
    ]);
  };


  const deleteUser = ((id) => {
    setUsers(users.filter((user) => user.id !== id));
  });

  const updateUser = (updateUser) => {
    setUsers(
      users.map((user) =>
        user.id === updateUser.id ? updateUser : user)
    )
  };


  return (
    <div className="container">
      <h1>Crud app</h1>
      <UserForm addUser={addUser} />
      <UserList
        users={users}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </div>
  )
}

export default App;
