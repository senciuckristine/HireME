
import React from 'react';
import {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios";
import axios from 'axios';
const questions = [];

function createSurvey(){
    
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

    const addQuestion = () => {
        if(question)
            questions.push(question);
        setQuestion("");
    }

    const checkIfExists = (code) => {
        console.log(code);
        const aux = ListOfCodes.filter(it => it.id.includes(code));
        console.log(aux);
        return aux.length;
    }
    
    const addSurvey = async (e) => {
        e.preventDefault();
        if( (code.length == 5) && code.match(/^[0-9]+$/) != null)
        {
            if(question)
                questions.push(question);
            if(questions.length>0){
                if(!checkIfExists(code)){
                    for(const q of questions){
                    axios.post("http://localhost:5000/surveys/add",{
                        username: username,
                        id: code,
                        question:q,
                    }).then((response)=>{
                        setError("");
                        setSuccess("Survey successfully added!");
                        });
                        setTimeout(() => {
                            setSuccess("");
                          }, 1000);
                    }
                }else{
                    setError("You must provide an unique code!");
                }
            }else{
                setError("You must provide at least one question!");
            }
        }else{
            setError("The code must have exactly 5 digits(only numbers)!");
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
                {error && <div className="alert">{error}</div>}
                {success && <div className="success">{success}</div>}
                <button className="button0" onClick ={addSurvey} >Submit survey</button>
                <br></br>
                
            </div>
        </div>
        </body>
    );
  
}

export default createSurvey;