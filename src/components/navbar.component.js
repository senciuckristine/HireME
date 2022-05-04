import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


import {Nav,NavDropdown} from 'react-bootstrap';

export default class Navbar extends Component {
  render() {
    var user1 = JSON.parse(localStorage.getItem('currentUser'));
  const user = localStorage.getItem("token");
  const currentLogged = localStorage.getItem("currentLoggedAdmin");

 const handleLogout = () => {
   localStorage.removeItem("token");
   window.location = "/login";
 }
 const handleLogin = () => {
  window.location = "/login";
}

 const handleMyProfile = () => {
  window.location = "/adminslist";
}
    return (
      
      <nav className="topnav">
        <Link to="/">
             <img src="logo192.png" alt="" width="50" height="63"/>
        </Link>
            
        <div className="collpase navbar-collapse">
        <ul className ="topnav-right" >
          
        <li className="navbar-item">
          {!user && <button className = "button_2"  onClick={handleLogin}>Login</button>}
          </li>
          
        </ul>
        <ul className ="topnav-right" >
         {user && <button className = "button_2 "  onClick={handleLogout}>Logout</button>}
        
          
        </ul>
        <ul className ="topnav-right" >
         {user && <button className = "button_3 "  onClick={handleMyProfile}>My Profile</button>}
        
          
        </ul>
        
        </div>
        
        {user && <p className="pstyle"> {currentLogged}
        </p>}
        
      </nav>
     
    );
  }
}