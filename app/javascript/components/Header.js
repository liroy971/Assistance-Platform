import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./contexts/ContextFile";
function Header() {
  const { userData, setUserData } = useContext(UserContext);

    const Logout = () => {
      setUserData({
        token: null,
        isLoggedIn: false,
        user: null,
      });

      setTimeout(() => {
        window.location.reload();
      }, 500);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    };
  return (
<div className="sb-nav-fixed">
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand " href="/">Assistance Platform</a>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/">Home</a></li>
                    <li><hr className="dropdown-divider" /></li>

                    <li>{userData.isLoggedIn ? (

                      <>
                      <Link to="/map" className="dropdown-item">
                        Map
                      </Link>
                      <Link to="" onClick={Logout}className="dropdown-item">
                        Log out
                      </Link>
                      </>
                    ) : (
                      <>
                      <Link to="/login" className="dropdown-item">
                        Sign in
                      </Link>
                      <Link to="/register" className="dropdown-item">
                        Sign up
                      </Link>
                      </>
                    )}

                    </li>
                    <li><a className="dropdown-item" href="/users">Settings</a></li>

                </ul>
            </li>
        </ul>
    </nav>
  </div>

);
}
export default Header;
