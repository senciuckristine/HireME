import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


//import {Nav,NavDropdown} from 'react-bootstrap';

export default class Navbar extends Component {
  render() {
    //var user1 = JSON.parse(localStorage.getItem('currentUser'));
  const user = localStorage.getItem("token");
  const currentLogged = localStorage.getItem("currentLoggedAdmin");

 const handleLogout = () => {
   localStorage.removeItem("token");
   window.location = "/login";
 }
 const handleLogin = () => {
  window.location = "/login";
}
const removeSurveyToken = () =>{
  localStorage.removeItem("tokenSurvey");
}
 const handleCreateSurvey = () => {
  window.location = "/createSurvey";
}

const handleSeeYourSurveys = () => {
  window.location = "/mySurveys";
}
const handleAboutUs = () => {
  window.location = "/AboutUs";
}
    return (
      
      <nav className="topnav">
        <Link onClick={removeSurveyToken} to="/">
             <img src="logo192.png" alt="" width="50" height="63"/>
        </Link>
            
        <div>
        <ul className ="topnav-right" >
        {!user &&<p className="admin-question">Are you an administrator? Please, </p>} 
        <li className="navbar-item">
          {!user && <button className = "button_2"  onClick={handleLogin}>Login</button>}
          </li>
          
        </ul>
        <ul className ="topnav-right" >
         {user && <button className = "button_2 "  onClick={handleLogout}>Logout</button>}
        
          
        </ul>
        <ul className ="topnav-right" >
         {user && <button className = "button_3 "  onClick={handleCreateSurvey}>Create survey</button>}
        
          
        </ul>
        <ul className ="topnav-right" >
         {user && <button className = "button_4 "  onClick={handleSeeYourSurveys}>Your surveys</button>}
        
          
        </ul>

        
        <ul className ="topnav-right" >
         <button className = "button_5 "  onClick={handleAboutUs}>About us</button>
        
          
        </ul>
        
        </div>
        
        {user && <a className="pstyle" href="/adminslist"> {currentLogged} </a>}
        
      </nav>
     
    );
  }
}