  import React, { useState, useContext } from 'react';
  import axios from 'axios';
  import {Link, useNavigate} from 'react-router-dom';
  import { UserContext, ErrorContext } from "../contexts/ContextFile";
  import { DirectUpload } from "@rails/activestorage";
function SignUp() {

  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [adress, setAdress] = useState("");
  const [username, setUsername] = useState("");
  const [identity, setIdentity] = useState({});
  let { error, setError } = useContext(ErrorContext);
  const navigate = useNavigate();
  const handleFirstName = (event) => {setFirstName(event.target.value)}
  const handleLastName = (event) => {setLastName(event.target.value)}
  const handleAdress = (event) => {setAdress(event.target.value)}
  const handleUsername = (event) => {setUsername(event.target.value)}
  const handleEmail = (event) => {setEmail(event.target.value)}
  const handlePassword = (event) => {setPassword(event.target.value)}
  const handleConfirm = (event) => {setPasswordConfirmation(event.target.value)}
  const handleIdentity = (event) => {setIdentity(event.target.files[0])}



  const  onSubmit = async (event) => {
  //  event.preventDefault()

  const data = {
    first_name: firstName,
    last_name: lastName,
    adress: adress,
    email: email,
    password: password,
    password_confirmation: passwordConfirmation,
  };
  let res = await axios
  .post('http://localhost:3001/auth/signup', {
    auth: {
      first_name: firstName,
      last_name: lastName,
      adress: adress,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    }})
      .then(response => {
        setUserData({
          token: response.data.token,
          isLoggedIn: true,
          user: data,
        });

        localStorage.setItem("token", JSON.stringify(response.data.token.token));
        localStorage.setItem("user", JSON.stringify(data));
console.log('The user have been created and logged in',response);
//        navigate("/map");
console.log(response.data);
        })
      .catch(error => console.log('impossible', error))
return res;
}



  return (
    <>
      <div className="page-main-ctn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                <div className="card-body">
                                    <form onSubmit={onSubmit}>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input
                                                    className="form-control"
                                                    id="inputFirstName"
                                                    type="text"
                                                    name="first_name"
                                                    placeholder="Enter your first name"
                                                    onChange={handleFirstName} />
                                                    <label htmlFor="inputFirstName">First name{" "}</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                    className="form-control"
                                                    id="inputLastName"
                                                    type="text"
                                                    name="last_name"
                                                    placeholder="Enter your last name"
                                                    onChange={handleLastName}  />
                                                    <label htmlFor="inputLastName">Last name{" "}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                            className="form-control"
                                            id="inputAdress"
                                            type="adress"
                                            name="adress"
                                            placeholder="Confirm adress"
                                            onChange={handleAdress} />
                                            <label htmlFor="inputAdress">Adress{" "}</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                        <input
                                        className="form-control"
                                        id="inputUsername"
                                        type="username"
                                        name="email"
                                        placeholder="name@example.com"
                                        onChange={handleEmail} />
                                        <label htmlFor="inputUsername">E-mail{" "}</label>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input
                                                    className="form-control"
                                                    id="inputPassword"
                                                    type="password"
                                                    name="password"
                                                    placeholder="Create a password"
                                                    onChange={handlePassword} />
                                                    <label htmlFor="inputPassword">Password{" "}</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input
                                                    className="form-control"
                                                    id="inputPasswordConfirm"
                                                    type="password"
                                                    name="password"
                                                    placeholder="Confirm password"
                                                    onChange={handleConfirm}
                                                    />
                                                    <label htmlFor="inputPasswordConfirm">Confirm Password{" "}</label>
                                                </div>
                                            </div>

                                            <div className="mb-3 py-2">
                                              <label htmlFor="formFile" className="form-label">Confirm your identity</label>
                                              <input
                                              className="form-control"
                                              type="file"
                                              id="formFile"
                                              onChange={handleIdentity}
                                              />
                                            </div>

                                        </div>
                                        <div className="mt-4 mb-0">
                                            <div className="d-grid"><button className="btn btn-primary btn-block" placeholder="submit" type="submit">Create Account</button></div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center py-3">
                                    <div className="small"><a href="/login">Have an account? Go to login</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
  );
  }

  export default SignUp;
