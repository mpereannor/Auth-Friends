import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Login from './login';

import './App.css';

function App() {
  const onLogout = () => {

    localeStorage.clear();

    history.replaceState('/')

  }
  return (
    <div className="App">
      <nav>
        <NavLink exact to='/'> Login</NavLink>
        <NavLink to='/friendslist'>Friends List</NavLink>
      
      <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route exact path='/' component={Login}/>

        <Route exact path='/friendslist' render={props => withAthCheck(friendslist, props)}
        />
        
      </main>
      />
    </div>
  );
}

function withAthCheck(Component, props) {
  if (localeStorage.getItem('token')) {
    return <Component {...props}/> 
  }
  return <Redirect to='/'/>
}

export default withRouter(App);
