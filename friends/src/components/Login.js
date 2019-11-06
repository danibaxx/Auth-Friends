import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const [error, setError] = useState();
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const handleChange = event => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/login', login)
      .then(result => {
        // console.log('Result', result.data)
        localStorage.setItem('token', result.data.payload)
        props.history.push('/account')
      })
      .catch(err => {
        setError(err.response.data.message)
        // console.log('Error', err.response.data.message)
      })
  };

  return(
      <form onSubmit={handleSubmit}>
        {error && <div className='error'>{error}</div>}
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={login.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={login.password}
          onChange={handleChange} 
        />
        <button type='submit'>Login</button>
      </form>
  );
};

export default Login;