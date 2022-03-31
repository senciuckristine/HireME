import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

export default class Navbar extends Component {

  
  render() {
    return (
      
      <nav className="topnav">
        <Link to="/">
             <img src="logo192.png" alt="" width="50" height="63"/>
        </Link>
            
        <div className="collpase navbar-collapse">
        <ul className ="topnav-right" >
          <li className="navbar-item">
          <Link to="/login" className ="button">Login</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}