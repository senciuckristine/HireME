import React from 'react';
import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import Axios from "axios";
//import styles from "../App.css";


function ShowAdminsList() {
  const [ListOfAdmins,setListOfAdmins] =useState([]);
  const[username,setUserName]=useState("");
  const[name,setName]=useState("");
  const[company,setCompany]=useState("");
  const[password,setPassword]=useState("");

  //var user1 = JSON.parse(localStorage.getItem('currentUser'));
  const currentLogged = localStorage.getItem("currentLoggedAdmin");

  const res = ListOfAdmins.filter(it => it.username.includes(currentLogged));

  useEffect(()=>{
     Axios.get("http://localhost:5000/admins/").then((response)=>{
      setListOfAdmins(response.data);
     });
  },[]);

  const createNewAdmin = () => {
    Axios.post("http://localhost:5000/admins/add",{
      username,
      password,
      name,
      company,
    }).then((response)=>{
      setListOfAdmins([
        ...ListOfAdmins,
        {
          name,
          company,
          username,
        },
      ]);
    });
  };
  const createNewSurvey = () => {
    window.location = "/createSurvey";
  }
  const editProfile = () =>{
    window.location = "/editProfile";
  }
  return (
    <body  background="back3.jpg">
    <div>
      <br></br>
      <div><h7>My Profile</h7>
       <Link  onClick={editProfile} to="/editProfile">
             <img  className="img2" src="editprofilelogo.png" alt="" width="35" height="38" left="80%"  />
        </Link>
        </div>
      <br></br>
      <br></br>
      <div className="grid">
      <br></br>
      <div className="img2" >
      <h2 >Personal information</h2>
      
        </div>
      <div className="splitscreen" >
      <div className="left"> 
        <h4>Username: </h4>
        <h4>Name: </h4>
        <h4>Company: </h4>
      </div>
        {res.map((admin)=>{
          return(
            <div className="right">
            <h4>{admin.username}</h4>
            <h4>{admin.name}</h4>
            <h4>{admin.company}</h4>
            </div>
          );
        })}
      </div>
      </div>
      <br></br><br></br>
      <h2>List of currently active administrators</h2>

     <div  >
     
       <table className="centerTable">
     <tr>
    <th>UserName</th>
    <th>Name</th>
    <th>Company</th>
  </tr>
          {ListOfAdmins.map((admins)=>{
            return (
              
 
              <tr>
              <td> {admins.username}</td>
               <td>{admins.name} </td>
                <td>{admins.company}</td>
              
              <br/>
              </tr>
            
              
              
              
            );
          })}
          </table>
     </div>
     <br></br>
     <br></br>
     <div className="grid">
     <br></br>
     <h2>Add a new administrator</h2>
     <br></br>
     <div className="splitscreen" >
       <div className="left"> 
        <input   className="inputStyle" type="text" placeholder="UserName.." onChange={(event)=>{
         setUserName(event.target.value);
         }}/>
         <br></br> <p>  </p>
        <input className="inputStyle" type="text" placeholder="Name.." onChange={(event)=>{setName(event.target.value)}}/>
      </div>
      
       <div className="right">
       <input className="inputStyle" type="text" placeholder="Company.." onChange={(event)=>{setCompany(event.target.value)}}/>
       <br></br> <p>  </p>
       <input className="inputStyle" type="text" placeholder="Password.." onChange={(event)=>{setPassword(event.target.value)}}/>
       
       
       </div>
     </div>
     
     <button className="button0" onClick ={createNewAdmin}>Create new admin</button>
     <br></br>
     </div>
     <br></br><br></br>
     <div className="grid">
     <br></br>
     <h2>Add a new survey!</h2>
     <h4>Click on the button below to create a new survey:</h4>
     <button className="button0" onClick ={createNewSurvey}>Create your survey</button>
     <br></br>
     </div>
     <br></br>
     <br></br>
    </div>
    </body>
  );
}

export default ShowAdminsList;
