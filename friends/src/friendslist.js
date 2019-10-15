import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const addToDatabase = () => {

    const {name, age, email} = useRef();
    axios.post('`http://localhost:5000/api', {
        username: usernameRef.current.value,
        age: age.current.value,
        email: email.current.value,      
    })
    .then(res => {
        localStorage.setItem('token', res.data.token)

        props.history.replace('/friendslist')
    })
    .catch(error => { 
        alert(error.response.data.message)
    })
}

import withAuth from '.../axios';

export default function FriendList () {

    return (
        <div>

        </div>
    )
}


function Friend ({id, name, age, email}) {

    return (
        <div>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <h3>{email}</h3>
        </div>
    )
}
**Adding New Friends**
* Create a form to collects data for a new friend.
* Make a POST request to add a friend to the database
* Each `friend` item that is in the `friends` array should have the following format:

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}
```