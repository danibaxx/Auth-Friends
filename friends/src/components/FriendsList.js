import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get('http://localstorage:5000/api/friends')
      .then(response => {
        setFriends(response.data)
        console.log('Res', response.data)
      })
      .catch(error => {
        console.log('Error', error)
      })
  },[friends])

  return (
    <>
      <h1>My Account</h1>

      <div className='account-name'>Name: {user.name}</div>
      <div className='account-email'>Email: {user.email}</div> 
    </>
  )
}

export default FriendsList;