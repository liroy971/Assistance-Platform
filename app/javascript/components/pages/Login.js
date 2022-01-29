import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { UserContext } from "../contexts/ContextFile";


function Login() {
const navigate = useNavigate();
const { setUserData } = useContext(UserContext);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const handleEmail = (event) => {setEmail(event.target.value);};
const handlePassword = (event) => {setPassword(event.target.value);};

const onSubmit = (event) => {
  event.preventDefault()
      let user = {
        email: email,
        password: password
      }

let res = axios.post('http://localhost:3001/auth/signin', {
  auth: {
            email: email,
            password: password,
          }
  })
  .then(response => {
        setUserData({
          token: response.data.jwt,
          isLoggedIn: true,
          user: user,
        });
        console.log('Connected',response)
        localStorage.setItem("token", JSON.stringify(response.data.jwt));
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/map");
      })
      .catch(error => console.log(error))
      return res;
};

  return (
<>
<div className="page-main-ctn">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                            <div className="card-body">
                                <form onSubmit={onSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                        className="form-control"
                                        id="inputEmail"
                                        type="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        onChange={handleEmail} />
                                        <label htmlFor="inputEmail">E-mail{" "}</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                        className="form-control"
                                        id="inputPassword"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handlePassword} />
                                        <label htmlFor="inputPassword">Password{" "}</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                        <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <a className="small" href="password.html">Forgot Password?</a>
                                        <button className="btn btn-primary" placeholder="submit" type="submit">Log In</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small"><a href="/register">Need an account? Sign up!</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

</>
  );
  }

  export default Login;
