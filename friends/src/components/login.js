import React,  { useRef } from 'react';
import axios from 'axios';

export default function Login (props) { 

    const usernameRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        axios.post('http://localhost:5000/api/login', {
            Username: usernameRef.current.value,
            Password: passwordRef.current.value,
        })
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friendlist')
        })
        .catch(error => { 
            alert(error.response.data.message)
        })
    }

    return (
        <form>
            <div>
                <h3>Log in</h3>
                Username
                <input ref={usernameRef}
                type="text" placeholder="enter your username" />
                <br/>
                Password
                <input type="password" ref={passwordRef} placeholder="enter password" />
                <br/>
                <button onClick={submit}>Submit</button>
            </div>
        </form>   
    )
}

