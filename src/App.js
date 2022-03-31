import React from 'react';
import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios";
import "../src/App.css";

function App() {
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
    <div className="App">
     <div >
       <table>
     <tr>
    <th>UserName</th>
    <th>Name</th>
    <th>Company</th>
  </tr>
          {ListOfAdmins.map((admins)=>{
            return (
              
 
              <tr>
              <th> {admins.username}</th>
               <th>{admins.name} </th>
                <th>{admins.company}</th>
              
              <br/>
              </tr>
            
              
              
              
            );
          })}
          </table>
     </div>
     <div>
       <input type="text" placeholder="UserName.." onChange={(event)=>{
         setUserName(event.target.value);
         }}/>
       <input type="text" placeholder="Name.." onChange={(event)=>{setName(event.target.value)}}/>
       <input type="text" placeholder="Company.." onChange={(event)=>{setCompany(event.target.value)}}/>
       <input type="text" placeholder="Password.." onChange={(event)=>{setPassword(event.target.value)}}/>
       <button onClick ={createNewAdmin}>Create new Admin</button>
     </div>
    </div>
  );
}

export default App;
