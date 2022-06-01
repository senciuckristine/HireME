import React from 'react';

import axios from 'axios';
import Axios from "axios";
import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const answers = [];



function takeSurvey(){
   
  const [data, setData] = useState({ id: "", username: "",question:"" });
    const[code,setCode]=useState("");
    const[nume,setNume]=useState("");
    const[question,setQuestion]=useState("");
    const username = localStorage.getItem("currentLoggedAdmin");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [ListOfCodes,setListOfCodes] =useState([]);
    const [ListOfQuestions,setListOfQuestions] =useState([]);
    const [ListOfAnswers, setListOfAnswers] = useState([]);
   
    const tokensurvey = localStorage.getItem("tokenSurvey");
    
    const  res = ListOfQuestions.filter(it => it.id === code);
    let  i =1;
    let j=0;
    let aux=[];
    let k=0;
   
   useEffect(()=>{
        Axios.get("http://localhost:5000/surveys/").then((response)=>{
            setListOfCodes(response.data);
            setListOfQuestions(response.data);
        });
     },[]);
     const checkIfExists = (code) => {
      const aux = ListOfCodes.filter(it => it.id === code);
    
      return aux.length;
  }
  function checkEvt(){
    var evTypep=window.performance.getEntriesByType("navigation")[0].type;
       if (evTypep=='reload'){
        localStorage.removeItem("tokenSurvey");
         window.location.replace("/takeSurvey");
       }
      
}
checkEvt();
  const addResponse = async (e) => {
    /*for(i=2;i<6;i++){
      console.log(document.getElementById(i).value);
    }*/
    e.preventDefault();
    if(nume.length>0){
        for(k=0;k<res.length;k++){
          axios.post("http://localhost:5000/surveyResponses/add",{
              id: code,
              name: nume,
              answer:document.getElementById(k+2).value,
              question: res[k].question,
          }).then((response)=>{
            setError("");
            setSuccess("Survey successfully added!");
            });
            setTimeout(() => {
                setSuccess("");
              }, 1000);
        }
    }else{
        setError("You must enter your name!");
      }
          
}

  
     const handleSubmit = async (e) => {
		e.preventDefault();
    console.log(code.length);
    if(code.length>0){
        if(checkIfExists(code)!=0){
         
            Axios.get("http://localhost:5000/surveys/"
             
            ).then((response)=>{
              
                setError("");
                setSuccess("Survey successfully added!");
                
                localStorage.setItem("tokenSurvey", response.data);
              
                localStorage.setItem("currentEnteredCode",data.id);
                
                });
                setTimeout(() => {
                    setSuccess("");
                  }, 100);
                
                 
        }else{
            setError("You must provide an unique/valid code!");
            setTimeout(() => {
              setError("");
            }, 2000);
        }
    }else{
      setError("You must enter a code!");
            setTimeout(() => {
              setError("");
            }, 2000);
    }
     };
   
    return (
      <body background="back3.jpg">
      <div>
      <br></br><br></br>
      {!tokensurvey && <h5 align="center">Enter your code</h5> }
        <br></br>
        <form onSubmit={handleSubmit}>
        {!tokensurvey && <input  className="inputStyle4" type="text" placeholder="  Code.." value={code} onChange={(event)=>{setCode(event.target.value)} } 
							
							 />}
                 {tokensurvey &&  <div className='grid3' >
                 <br></br>
                 <div>
                 <label className='h444'>Introduceti numele      </label>  
                 
                 <input   type="text" placeholder="  Nume.." value={nume} onChange={(event)=>{setNume(event.target.value)} } required ></input>
                 </div>
                 <br></br> <br></br>
        {res.map((survey)=>{
          return(
            <div>
            <div >
              
            <p className='h44'>{i}. {survey.question}</p>
            <script>{i++}</script>
            </div>
            <div>
            <textarea placeholder='Insert text' id={i} ></textarea>
          
            <br></br><br></br>
           
            </div>
            </div>
          );
        })}
        
          <br></br> 
          {success && <div className="success">{success}</div>}
          {error && <div className="alert">{error}</div>}
          <button className="button0111"  onClick ={addResponse}>Submit</button>   
          <br></br>     
      </div>}
                <br></br><br></br>
                {!tokensurvey && success && <div className="success">{success}</div>}
                {!tokensurvey && error && <div className="alert">{error}</div>}
                {!tokensurvey && <button className="button011"  >Submit</button>}
        </form>
         </div>
         </body>
    );
  }
  export default takeSurvey;