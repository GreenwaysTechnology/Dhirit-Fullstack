import React, { useState } from "react"

const Login = () => {
    const [userName, setUserName] = useState('Your Name goes here')
    const onUpdate = (evt) => {
        setUserName(evt.target.value)
    }
    return <>
        <h2>Name : {userName}</h2>
        <input value={userName} onChange={onUpdate} />
        <button onClick={() => {
            alert(userName)
        }}>Get Value</button>

    </>

}


export default function App() {
    return <div>
        <Login />
    </div>
}