import React from 'react';
import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios";
import styles from "../App.css";


function ShowAdminsList() {
  const [ListOfAdmins,setListOfAdmins] =useState([]);
  const[username,setUserName]=useState("");
  const[name,setName]=useState("");
  const[company,setCompany]=useState("");
  const[password,setPassword]=useState("");

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
  return (
    <div  >
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
     <div className="centerTable" >
       <input   className="inputStyle" type="text" placeholder="UserName.." onChange={(event)=>{
         setUserName(event.target.value);
         }}/>
       <input className="inputStyle" type="text" placeholder="Name.." onChange={(event)=>{setName(event.target.value)}}/>
       <input className="inputStyle" type="text" placeholder="Company.." onChange={(event)=>{setCompany(event.target.value)}}/>
       <input className="inputStyle" type="text" placeholder="Password.." onChange={(event)=>{setPassword(event.target.value)}}/>
       <button  onClick ={createNewAdmin}>Create new Admin</button>
     </div>
    </div>
  );
}

export default ShowAdminsList;
