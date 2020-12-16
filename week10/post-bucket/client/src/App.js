import { navigate, Router, Link } from '@reach/router';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import axios from 'axios';
import Home from './Components/Home';
import Register from './Components/Register';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect( () => {
    axios.get("http://localhost:8000/api/users/session", {
      withCredentials: true
    })
      .then(res => {
        setLoggedInUser(res.data.user);
        if(res.data.user === null) {
          navigate("/");
        }
      }).catch(err => console.error(err));
  }, []);

  const logout = e => {
    axios.delete("http://localhost:8000/api/users/session", {
      withCredentials: true
    })
      .then(res => {
        console.log(res);
        navigate("/");
        setLoggedInUser(null);
      }).catch(err => console.error(err));
  }

  return (
    <div className="container">
      <h1>hello</h1>
      {loggedInUser ? 
        <button className="btn btn-outline-danger" onClick={logout}>Sign Out</button> : ""}
      <Link className="btn btn-outline-dark" to="/home">Home</Link>
      <Router>
        <Login path="/" onLogin={user => setLoggedInUser(user)} />
        <Register path="/user/new" onRegister={user => setLoggedInUser(user)} />
        <Home path="/home" user={loggedInUser} />
      </Router>
    </div>
  );
}

export default App;
