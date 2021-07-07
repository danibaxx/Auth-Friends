import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

// utilities
import { getPayload } from './utilities/api';

// components
import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  const signedIn = getPayload();

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        {!signedIn && <Link to='/login'>Login</Link>}
        {signedIn && <Link to='/friendslist'>Friends List</Link>}
        {signedIn && <Link to='/logout'>Logout</Link>}
      </nav>

      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/friendslist' component={FriendsList} />
      <ProtectedRoute exact path='/logout' component={Logout} />
    </div>
  );
}

export default withRouter(App);