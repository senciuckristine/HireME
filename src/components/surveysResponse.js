import React, { Component } from 'react';

import axios from 'axios';
import Axios from "axios";
import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function surveysResponse(){

    const [ListOfQuestions,setListOfQuestions] =useState([]);
    const [ListOfCodes,setListOfCodes] =useState([]);
    const [ListOfResponses,setListOfResponses] =useState([]);
    const username = localStorage.getItem("currentLoggedAdmin");

    useEffect(()=>{
        Axios.get("http://localhost:5000/surveys/").then((response)=>{
            setListOfCodes(response.data);
            setListOfQuestions(response.data);
            
        });
        Axios.get("http://localhost:5000/surveyResponses/").then((response)=>{
            setListOfResponses(response.data);
            
        });
     },[]);
let code = localStorage.getItem("currentSurvey");
    const  res = ListOfResponses;
    let res2 = ListOfQuestions.filter(it => it.username === username);
    let res3 = ListOfResponses.filter(it => it.id === code);
    console.log(res3);
    let names = res3.map(it => it.name);
    names = [...new Set(names)];
    console.log(names);
    
    let  i =1;
    let  j =1;
 
    return (
        <body  background="back3.jpg">
        <div>
          <br></br>
          <div><h7>Survey Responses</h7></div>
          
            <div>
                <br></br><br></br>
            <div>  
            {names.map((name)=>{
          return(  
            <div>
            <br></br><br></br>
                <form className='formStyle2'>
                <br></br>
                <p className='h443'>Response no. {i}</p>
                <script>{i++}</script>
                <script>{j=1}</script>
                <p className='h44'>Name: {name}</p>
                <br></br>
                <p className='h442'>Answers</p>
                {res.filter(it => it.name === name).map((response)=>{
                    return (
                        <div>
                        <p className='h44q'>{j}. {response.question}</p>
                        <p className='h44a'>A: {response.answer}</p>
                        <script>{j++}</script>
                        </div>
                    )
                })}
            <br></br></form></div>
          )
            })}
            </div>
            </div>
            
          
          </div>
          <br></br><br></br>
          </body>
    );
}

export default surveysResponse;