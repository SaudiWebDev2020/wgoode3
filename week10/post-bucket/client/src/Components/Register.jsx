import React, { useState } from 'react'
import { navigate, Link } from '@reach/router';
import axios from "axios";


const Register = props => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});

  const register = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/users", {userName, email, password, confirm}, {
      withCredentials: true
    }).then(res => {
      console.log(res);
      if(res.data.errors) {
        setErrors(res.data.errors);
      } else {
        props.onRegister(res.data.user);
        navigate("/home");
      }
    }).catch(err => console.error(err));
  }

  return (
    <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <div className="card">
          <div className="card-header">Sign Up</div>
          <div className="card-body">
            <form onSubmit={register}>
            <div className="form-group">
                <label>Username</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="userName" 
                  onChange={e => setUserName(e.target.value)} 
                  value={userName} 
                />
                <p className="text-danger">{errors.userName ? errors.userName.message : ""}</p>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="email" 
                  onChange={e => setEmail(e.target.value)} 
                  value={email} 
                />
                <p className="text-danger">{errors.email ? errors.email.message : ""}</p>
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
                <p className="text-danger">{errors.password ? errors.password.message : ""}</p>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  name="confirm"
                  onChange={e => setConfirm(e.target.value)} 
                  value={confirm} 
                />
                <p className="text-danger">{errors.confirm ? errors.confirm.message : ""}</p>
              </div>
              <p className="text-danger">{errors.message}</p>
              <input type="submit" className="btn btn-primary btn-block btn-lg" value="Sign Up" />
            </form>
          </div>
          <div className="card-footer">
            <Link to="/">I already have an account!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register
