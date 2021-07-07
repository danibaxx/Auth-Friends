import React, { useState, useEffect } from 'react';
import api from '../utilities/api';

const FriendsList = (props) => {
  const [friend, setFriend] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    api()
      .get('/api/friends')
      .then(response => {
        setFriend({
          name: response.data.name,
          email: response.data.email
        // console.log('FL Res', response)
        })
      })
      .catch(error => {
        console.log('Error', error)
      })
  },[])

  return (
    <>
      <h1>Friends:</h1>

      <div className='friend-name'>Name: {friend.name}</div>
      <div className='friend-email'>Email: {friend.email}</div> 
    </>
  )
}

export default FriendsList;