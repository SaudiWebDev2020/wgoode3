import React, { useState } from 'react'
import { navigate, Link } from '@reach/router';
import axios from "axios";

const Login = props => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const login = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/users/session", {email, password}, {
      withCredentials: true
    })
      .then(res => {
        console.log(res);
        if(res.data.msg === "Invalid login attempt") {
          setErrors({message: "Invalid login attempt"});
        } else {
          props.onLogin(res.data.user);
          navigate("/home");
        }
      }).catch(err => console.log(err));
  }

  return (
    <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <div className="card">
          <div className="card-header">Sign In</div>
          <div className="card-body">
            <form onSubmit={login}>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="email" 
                  onChange={e => setEmail(e.target.value)} 
                  value={email} 
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  name="password"
                  onChange={e => setPassword(e.target.value)} 
                  value={password} 
                />
              </div>
              <p className="text-danger">{errors.message}</p>
              <input type="submit" className="btn btn-info btn-block btn-lg" value="Sign In" />
            </form>
          </div>
          <div className="card-footer">
            <Link to="/user/new">I have not yet signed up!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login;