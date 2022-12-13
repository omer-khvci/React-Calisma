import React, {useContext, useState} from 'react';
import UserContext from "../context/UserContext";

function Profile() {
    const {user, setUser} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const handleLogin = ()=>{
        setLoading(true);
        setTimeout(() =>{
            setUser({
                id: 1,
                username: "okahveci",
                bio: "lorem ipsum"
            });
            setLoading(false);
        },15000);
    };
    const handleLogout = () =>{
        setUser(null);
    }
    return (
        <div>
            {
                !user && (
                    <button onClick={handleLogin}>{loading ? "Loading...": "Login"}</button>
                )
            }

            <code>{JSON.stringify(user)}</code>
            <br />
            {user && <button onClick={handleLogout}>Logout</button>}
        </div>
    );
}

export default Profile;