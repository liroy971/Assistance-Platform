import React, { useEffect, useState, useContext } from "react";
import {Route, Routes, useNavigate, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from 'axios';
import {UserContext,UserLatContext,UserLngContext,UserIdContext,AllUserIdContext,CurrentUserContext,ErrorContext,FirstNameContext} from "./contexts/ContextFile";
import MapContainer from "./Map";
const App = () => {


const navigate = useNavigate();
const [userData, setUserData] = useState({
      token: JSON.parse(localStorage.getItem("token")) || null,
      user: JSON.parse(localStorage.getItem("user")) || null,
      isLoggedIn: JSON.parse(localStorage.getItem("user")) ? true : false,
    });
const csrf = document.querySelector('meta[name="csrf-token"]').content;
const [userLat, setUserLat] = useState(0);
const [userLng, setUserLng] = useState(0);
const [firstName, setFirstName] = useState("");
const [userId, setUserId] = useState(null);
const [allUserId, setAllUserId] = useState([]);
const [currentUser, setCurrentUser] = useState(null);
const [error, setError] = useState(false);

    React.useEffect(() => {
    getCurrentUser();
    checkedLoggedIn();
    getUserLocation();

      }, []);

const checkedLoggedIn = () => {
          let token = localStorage.getItem("token");
          if (token || userData.user) {
            setUserData({
              isLoggedIn: true,
            //  user: userData
            });
            console.log("loggedIn",token, userData.user);
          } else if (!token || !userData.user) {
            setUserData({
              isLoggedIn: false,
            });
            console.log("Not loggedIn", token,userData.user);
            //navigate("/register");
          }
        };

const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let { latitude, longitude } = position.coords;

        setUserLat(latitude);
        setUserLng(longitude);
      },
      (error) => {
        if (error.code === 1) {
          alert(
            "Allow location, for experiences with the app."
          );
          console.log(error,position);
        }
      }
    );
  }
};
const getCurrentUser = async () => {
    let res = await axios
      .get("http://localhost:3001/users", {
        headers: {
          "X-CSRF-Token": csrf,
          Authorization: `Basic ${userData.token}`,
        },
      })
      .then((response) => {
        const getAllId = response.data.map((user) => user.id);
        setAllUserId(getAllId);
        if (userData.isLoggedIn) {
          const user = JSON.parse(localStorage.getItem("user"));
          const curUser = response.data.find((item) => item.email === user.email);
          setUserId(curUser.id);
          setFirstName(curUser.first_name);
          setUserData({
            user: curUser,
            isLoggedIn: true,
          });
        }
        console.log(response);
      },
        (error) =>  {
          console.log(error);
        }
          );
    return res;
  };
  return (
    /* add routes */

<UserLatContext.Provider value={{userLat, setUserLat}}>
<UserLngContext.Provider value={{userLng, setUserLng}}>
<UserContext.Provider value={{userData, setUserData}}>
<FirstNameContext.Provider value={{firstName, setFirstName}}>
<UserIdContext.Provider value={{userId, setUserId}}>
<AllUserIdContext.Provider value={{allUserId, setAllUserId}}>
<CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
<ErrorContext.Provider value={{error, setError}}>
  <>
  <Header />
  <Sidebar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/map" element={<MapContainer />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        </Routes>
  </>
</ErrorContext.Provider>
</CurrentUserContext.Provider>
</AllUserIdContext.Provider>
</UserIdContext.Provider>
</FirstNameContext.Provider>
</UserContext.Provider>
</UserLngContext.Provider>
</UserLatContext.Provider>
  );
}

export default App;
