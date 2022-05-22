
import React from 'react';
import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios";
import axios from 'axios';


function createSurvey(){
    
    const[nameedit,setNameedit]=useState("");
    const[passwordedit,setPasswordedit]=useState("");
    const username = localStorage.getItem("currentLoggedAdmin");
    const adminname = localStorage.getItem("currentLoggedAdminName");
    
    const [companyedit, setCompanyedit] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [ListOfAdmins,setListOfAdmins] =useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:5000/admins/").then((response)=>{
            setListOfAdmins(response.data);
        });
     },[]);
     const checkIfExists = (nameedit) => {
        const aux = ListOfAdmins.filter(it => it.id.includes(nameedit));
        return aux.length;
    }
    
    const edit = async (e) => {
        e.preventDefault();
                    axios.post("http://localhost:5000/admins/edit",{
                        name: nameedit,
                        
                    }).then((response)=>{
                        setError("");
                        setSuccess("Survey successfully added!");
                        window.location = "/adminslist";
                        });
                        setTimeout(() => {
                            setSuccess("");
                          }, 1000);
                        
                    
                    
                
            
    };

    return (
      <body background="back3.jpg">
      <div>
            <br></br><br></br>
            <h6 align="center">Edit your profile</h6>
            <br></br><br></br>
            <div className="grid2">
            <br></br>
                <h4>Enter your new name: </h4>
                <input className="inputStyle2" type="text" placeholder="  Name.."  value={nameedit} onChange={(event)=>{setNameedit(event.target.value)}} required/>
                
                <h4>Enter your new password: </h4>
                <input className="inputStyle2" type="text" placeholder=" Password.." value={passwordedit} onChange={(event)=>{setPasswordedit(event.target.value)}} required/>
                
                <h4>Enter your new company:</h4>
                <input className="inputStyle2" type="text" placeholder=" Company.." value={companyedit} onChange={(event)=>{setCompanyedit(event.target.value)}} required/>
                
                {error && <div className="alert">{error}</div>}
                {success && <div className="success">{success}</div>}
                <button className="button0" onClick ={edit} >Submit </button>
                <br></br>
                
            </div>
        </div>
        </body>
    );
  
}

export default createSurvey;