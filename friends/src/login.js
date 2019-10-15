import React, from { useRef } from 'react';

import axios from 'axios';


export default function Login () { 

    const usernameRef = useRef();
    const passwordRef = useRef();

    const [loading, isLoading] = useState();

    const submit = () => {
        axios.post('`http://localhost:5000/login', {
            Username: usernameRef.current.value,
            Password: passwordRef.current.value,
        })
        .then(res => {
            localStorage.setItem('token', res.data.token)

            props.history.replace('/friendslist')
        })
        .catch(error => { 
            alert(error.response.data.message)
        })
    }

    return (
        <form onSubmit={submit}>
            <h3>Log in</h3>
            <h2> Username</h2>
            <input 
            ref={usernameRef}
            type="text" ref="username" placeholder="enter your username" />
            <h3>password</h3>
            <input type="password" ref={password}placeholder="enter password" />
            <input type="submit" value="Login" />
        </form>
          
    )
}

