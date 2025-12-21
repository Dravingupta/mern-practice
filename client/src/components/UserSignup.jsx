import { useState } from "react";
function UserSignup (){
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const  Adduser = async () => {
        await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username , email , password }),   
    });

    setEmail("");
    setUsername("");
    setPassword("");
    }
    return (
        <div>
            <input 
            type="text"
            placeholder="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}

             />
            <input 
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}

             />
            <input 
            type="text"
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}

             />
            <button
            onClick={Adduser}
            >sign up</button>
        </div>

    )
}
export default UserSignup;