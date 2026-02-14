import { useState } from "react";
import axios from "axios"; // 👈 import axios


function UserLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {

        try {
            const res = axios.post(
                "http://localhost:3000/auth/login",
                {
                    "email": email,
                    "password": password
                },
                {
                    withCredentials: true
                }
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <input type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="text"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} >login</button>
        </>

    )
}

export default UserLogin;