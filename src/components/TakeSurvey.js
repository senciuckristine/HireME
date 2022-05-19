import React from 'react';

import axios from 'axios';
import Axios from "axios";
import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const questions = [];


function takeSurvey(){
   
    
    const[code,setCode]=useState("");
    const[question,setQuestion]=useState("");
    const username = localStorage.getItem("currentLoggedAdmin");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [ListOfCodes,setListOfCodes] =useState([]);
   
   
   useEffect(()=>{
        Axios.get("http://localhost:5000/surveys/").then((response)=>{
            setListOfCodes(response.data);
        });
     },[]);
     const checkIfExists = (code) => {
      console.log(code);
      const aux = ListOfCodes.filter(it => it.id === code);
      console.log(aux);
      return aux.length;
  }
     const handleSubmit = async (e) => {
		e.preventDefault();
        if(checkIfExists(code)!=0){
         
            Axios.get("http://localhost:5000/surveys/"
             
            ).then((response)=>{
              console.log(response.data);
                setError("");
                setSuccess("Survey successfully added!");
                window.location = "/takeSurvey";
                });
                setTimeout(() => {
                    setSuccess("");
                  }, 2000);
                
                 
        }else{
            setError("You must provide an unique code!");
            setTimeout(() => {
              setError("");
            }, 2000);
        }
     };
   
    return (
      <body background="back3.jpg">
      <div>
      <br></br><br></br>
        <h5 align="center">Enter your code</h5>
        <br></br>
        <form onSubmit={handleSubmit}>
        <input  className="inputStyle4" type="text" placeholder="  Code.." value={code} onChange={(event)=>{setCode(event.target.value)} } required
							
							 />
                <br></br><br></br>
                {success && <div className="success">{success}</div>}
                {error && <div className="alert">{error}</div>}
        <button className="button011"  >Submit</button>
        </form>
         </div>
         </body>
    );
  }
  export default takeSurvey;