import { useState } from "react";

function UserForm({ addUser }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !age) {
            alert("შეავსე ყველა ველი");
            return;
        }

        addUser({
            name,
            age,
        });

        setName("");
        setAge("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="შეიყვანე სახელი"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="შეიყვანე ასაკი"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button type="submit">დამატება</button>
        </form>
    );
}

export default UserForm;