import { useContext } from 'react';
import { UserContext } from './UserContext';

function Profile() {
    const username = useContext(UserContext);

    return (
        <h1>გამარჯობა, {username}!</h1>
    );
}

export default Profile;