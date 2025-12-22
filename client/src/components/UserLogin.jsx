import { useState } from "react";

function UserLogin(){
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")


    return(
        <>
        <input type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input type="text"
        placeholder="Enter password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </>

    )
}