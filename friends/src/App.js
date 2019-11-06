import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

// components
import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/account'>Account</Link>
      </nav>

      <Route exact path='/login' component={Login} />
      <Route exact path='/account' component={FriendsList} />
    </div>
  );
}

export default withRouter(App);
