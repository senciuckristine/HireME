import React, { Component } from 'react';

import axios from 'axios';
import Axios from "axios";
import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function seeMySurveys(){

    const [ListOfQuestions,setListOfQuestions] =useState([]);
    const [ListOfCodes,setListOfCodes] =useState([]);
    const username = localStorage.getItem("currentLoggedAdmin");

    useEffect(()=>{
        Axios.get("http://localhost:5000/surveys/").then((response)=>{
            setListOfCodes(response.data);
            setListOfQuestions(response.data);
            
        });
     },[]);

    const  res = ListOfCodes.filter(it => it.username === username);
    let res2 = ListOfQuestions.filter(it => it.username === username);
    let myCodes = res.map(it => it.id);
    myCodes = [...new Set(myCodes)];
    

    let  i =1;
    let j=1;

    const seeResponses = async (e) => {
        e.preventDefault();
    }

    return (
        <body  background="back3.jpg">
        <div>
          <br></br>
          <div><h7>My Surveys</h7></div>
          {myCodes.map((code)=>{
          return(
            <div>
                <br></br><br></br>
            <div>  <form className='formStyle'>
                <br></br>
                <p className='h442'>  Survey no. {j}</p>
                <script>{j++}</script>
             {res2.filter(it => it.id === code).map((survey)=>{
                return(
                    <div><br></br><p className='h44'>{i}. {survey.question}</p>
                    <script>{i++}</script></div>
                )
            })}
            <br></br>
            <button className="button0111"  onClick ={seeResponses}>See responses</button>
            <br></br></form>
            </div>
            </div>
            
          );
        })}
          </div>
          <br></br><br></br>
          </body>
    );
}

export default seeMySurveys;