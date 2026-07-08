import UserItem from './UserItem';

function UserList({ users, deleteUser, updateUser }) {
    if (users.length === 0) {
        return <h3>მომხმარებელი არ არის დამატებული</h3>
    }

    return (
        <div>
            {users.map((user) => (
                <UserItem
                    key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                    updateUser={updateUser}
                />
            ))}
        </div>
    )
}

export default UserList;