import React, { useEffect, useState, useContext } from "react";
import {BrowserRouter as Router, Route, Routes, useNavigate, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from 'axios';
import {UserContext,UserLatContext,UserLngContext} from "./contexts/ContextFile";
import MapContainer from "./Map";
const App = () => {


  const csrf = document.querySelector('meta[name="csrf-token"]').content;
  const [userLat, setUserLat] = useState(0);
  const [userLng, setUserLng] = useState(0);
  const [userData, setUserData] = useState({
      token: JSON.parse(localStorage.getItem("token")) || null,
      user: JSON.parse(localStorage.getItem("user")) || null,
      isLoggedIn: JSON.parse(localStorage.getItem("user")) ? true : false,
    });


    React.useEffect(() => {
    checkedLoggedIn();
    getUserLocation();
      }, []);

const checkedLoggedIn = () => {
          let token = localStorage.getItem("token");
          if (token || userData.user) {
            setUserData({
              isLoggedIn: true,
              user: userData
            });
            console.log("loggedIn");
          } else if (!token || !userData.user) {
            setUserData({
              isLoggedIn: false,
            });
            console.log("Not loggedIn");
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
  return (
    /* add routes */

<UserLatContext.Provider value={{ userLat, setUserLat }}>
<UserLngContext.Provider value={{ userLng, setUserLng }}>
<UserContext.Provider value={{ userData, setUserData }}>
  <>
  <Router>
  <Header />
  <Sidebar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/map" element={<MapContainer />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        </Routes>
      </Router>
  </>
</UserContext.Provider>
</UserLngContext.Provider>
</UserLatContext.Provider>
  );
}

export default App;
