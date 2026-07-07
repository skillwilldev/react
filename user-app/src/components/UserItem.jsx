import { useState } from "react";
function UserItem({ user, deleteUser, updateUser }) {

    const [isEditing, setEditing] = useState(false);
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);

    const handleSave = () => {
        updateUser({
            id: user.id,
            name,
            age
        });
        setEditing(false);
    };
    return (
        <div className="user-card">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setAge(e.target.value)} />

                    <input type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <button onClick={handleSave}>
                        შენახვა
                    </button>
                </>
            ) : (
                <>

                    <h3>{user.name}</h3>
                    <p>ასაკი: {user.name}</p>
                    <button onClick={() => setEditing(true)}>რედაქტირება</button>
                    <button onClick={() => deleteUser(user.id)}>წაშლა</button>
                </>
            )}
        </div>
    )
}

export default UserItem;