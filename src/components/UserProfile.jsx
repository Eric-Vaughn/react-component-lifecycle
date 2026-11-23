import { useEffect, useState } from "react";

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []); // The empty dependency array ensures the effect runs only once

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserProfile;
