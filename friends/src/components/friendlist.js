import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withAuth from '../axios/index';


export default function FriendList (props
    ) {
    
    const [friends, setFriends] = useState([]);
    
    useEffect(() => {
        debugger
        withAuth()
        .get('http://localhost:5000/api/friends')
        .then(response => {
            setFriends(response.data);
        })
        .catch(error => {
            alert(error.response.data.message);
        });
    }, []);

    return (
        <div className='form'>
            {friends.map(friend =>( 
                <div className='formInfo'>
                    <h3>{friend.name}</h3>    
                    <p>{friend.email}</p>
                    <p>{friend.age}</p>
                </div>
            ))}
        </div>
    )
}


