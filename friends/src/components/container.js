import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Login from './login';
import FriendList from './friendlist'

function Container(props) {
  const onLogout = () => {

    localStorage.clear();

    props.history.push('/');

  }
  return (
    <div>
      <nav>
        <NavLink exact to='/'> Login</NavLink>
        <NavLink to='/friendlist'>Friends List</NavLink>
      
      <button onClick={onLogout}>Logout</button>
      </nav>

      {/* <main> */}
        <Route exact path='/' component={Login}/>

        <Route exact path='/friendlist' render={props => withAthCheck(FriendList, props)}
        />
        
      {/* </main> */}
    </div>
  );
}

function withAthCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props}/> 
  }
  return <Redirect to='/'/>
};

export default withRouter(Container);
