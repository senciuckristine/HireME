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
    return (
      
      <nav className="topnav">
        <Link to="/">
             <img src="logo192.png" alt="" width="50" height="63"/>
        </Link>
            
        <div className="collpase navbar-collapse">
        <ul className ="topnav-right" >
          
        <li className="navbar-item">
          {!user && <Link to="/login" className ="button">Login</Link>}
          </li>
          
        </ul>
        <ul className ="topnav-left" >
         {user && <button className = "button_2 " onClick={handleLogout}>Logout</button>}
        
          
        </ul>
        </div>
        
        {user && <p className="pstyle"> {currentLogged}
        </p>}
        
      </nav>
     
    );
  }
}