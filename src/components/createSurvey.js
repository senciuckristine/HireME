import React from 'react';
import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios";
//import styles from "../App.css";
import axios from 'axios';

const questions = [];

function createSurvey(){
    
    const[code,setCode]=useState("");
    const[question,setQuestion]=useState("");
    const username = localStorage.getItem("currentLoggedAdmin");

    const addQuestion = () => {
        questions.push(question);
        setQuestion("");
    }
    
    const addSurvey = () => {
        for(const q of questions){
        axios.post("http://localhost:5000/surveys/add",{
            username: username,
            id: code,
            question:q,
          }).then((response)=>{
            console.log(code);
            console.log(username);
            console.log(q);
            });
        }
    };

    return (
      <body background="back3.jpg">
      <div>
            <br></br><br></br>
            <h6 align="center">Create your own customized survey!</h6>
            <br></br><br></br>
            <div className="grid2">
            <br></br>
                <h4>Please, enter an unique 5-digit code for your survey: </h4>
                <input className="inputStyle2" type="text" placeholder="  Code.."  value={code} onChange={(event)=>{setCode(event.target.value)}} required/>
                <br></br><br></br>
                <h4>Add as many questions as you like(click the "Add question button after each one"): </h4>
                <input className="inputStyle3" type="text" placeholder=" Question.." value={question} onChange={(event)=>{setQuestion(event.target.value)}} required/>
                <br></br>
                <button className="button0" onClick ={addQuestion}>Add question</button>
                <br></br>
                <h4>When you're finished, click the "Submit survey" button below: </h4>
                
                <button className="button0" onClick ={addSurvey} >Submit survey</button>
                <br></br>
                
            </div>
        </div>
        </body>
    );
  
}

export default createSurvey;