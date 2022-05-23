import React from 'react';
import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import Axios from "axios";
//import styles from "../App.css";


function ShowAdminsList() {
  const [ListOfAdmins,setListOfAdmins] =useState([]);
  const[username1,setUserName]=useState("");
  const[name,setName]=useState("");
  const[company,setCompany]=useState("");
  const[password,setPassword]=useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  //var user1 = JSON.parse(localStorage.getItem('currentUser'));
  const currentLogged = localStorage.getItem("currentLoggedAdmin");

  const res = ListOfAdmins.filter(it => it.username == currentLogged);
  const aux = ListOfAdmins.filter(it => it.username == username1);

  useEffect(()=>{
     Axios.get("http://localhost:5000/admins/").then((response)=>{
      setListOfAdmins(response.data);
     });
  },[]);

  const createNewAdmin = () => {
    if(username1.length >2){
      if(name.length>2){
        if(password.length>5){
          if(company.length>2){
            if(aux.length==0){
    Axios.post("http://localhost:5000/admins/add",{
      username:username1,
      password,
      name,
      company,
    }).then((response)=>{
      setListOfAdmins([
        ...ListOfAdmins,
        {
          name,
          company,
          username1,
        },
      ]);
      setError("");
      setSuccess("Admin successfully added!");
      });
      setTimeout(() => {
          setSuccess("");
        }, 1000);
      }else{
        setError("This username is taken");
      }
  }else{
    setError("You must enter a valid company(minimum 3 characters)!");
  }
  }else{
    setError("You must enter a valid password(minimum 6 characters)!");
  }
  }else{
    setError("You must enter a valid name (minimum 3 characters)!");
  }
  }else{
    setError("You must enter a valid username(minimum 3 characters)!");
  }
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
        <input   className="inputStyle" type="text" placeholder="UserName.." value={username1} onChange={(event)=>{
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
     {error && <div className="alert">{error}</div>}
                {success && <div className="success">{success}</div>}
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
