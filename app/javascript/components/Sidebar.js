import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
function Sidebar() {

  return (
    <SideNav>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">

            <NavItem eventKey="home">
                <NavIcon>
                <a href="/">
                    <i className="fas fa-house-user" style={{ fontSize: '1.75em' }} />
                </a>
                </NavIcon>
                <NavText>
                <a href="/">
                    Home
                </a>
                </NavText>
            </NavItem>

            <NavItem eventKey="user">
                <NavIcon>
                    <i className="fas fa-address-card" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                <p>
                    Users
                </p>
                </NavText>

                <NavItem eventKey="account">
                    <NavText>
                    <a href="/account">
                        Account
                    </a>
                    </NavText>
                </NavItem>
                <NavItem eventKey="logout">
                    <NavText>
                    <a href="/logout">
                        Logout
                    </a>
                    </NavText>
                </NavItem>

                <NavItem eventKey="login">
                    <NavText>
                    <a href="/login">
                        Login
                    </a>
                    </NavText>
                </NavItem>
                <NavItem eventKey="register">
                    <NavText>
                    <a href="/register">
                        Sign up
                    </a>
                    </NavText>
                </NavItem>
            </NavItem>
            <NavItem eventKey="map">
                <NavIcon>
                <a href="/map">
                    <i className="fa fa-globe" aria-hidden="true" style={{ fontSize: '1.75em' }} />
                </a>
                </NavIcon>
                <NavText>
                <a href="/map">
                    Map
                </a>
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>

);
}
export default Sidebar;
