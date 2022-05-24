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

    const  res = ListOfCodes.filter(it => it.username === username);
    let res2 = ListOfQuestions.filter(it => it.username === username);
    let res3 = ListOfResponses;
    let myCodes = res.map(it => it.id);
    myCodes = [...new Set(myCodes)];
    

    let  i =1;
    let j=1;
    let k=1;

    const seeResponses = async (e) => {
        e.preventDefault();
        window.location = "/surveysResponse";
    }

    return (
        <body  background="back3.jpg">
        <div>
          <br></br>
          <div><h7>Survey Responses</h7></div>
          {myCodes.map((code)=>{
          return(
            <div>
                <br></br><br></br>
            <div>  <form className='formStyle'>
                <br></br>
                <p className='h442'>  Survey no. {j} - id {code}</p><br></br>
                <script>{j++}</script>
                <script>{i=1}</script>
             {res2.filter(it => it.id === code).map((survey)=>{
                return(
                    <div><p className='h44'>{i}. {survey.question}</p>
                    <script>{i++}</script>
                    <script>{k=1}</script>
                    <table className="centerTable">
                        <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Answer</th>
                    </tr>
                    {res3.filter(it => it.id === code).filter(it => it.question === survey.question ).map((response)=>{
                        return(
                           
                                <tr>
                                    <td> {k}</td>
                                    <td>{response.name} </td>
                                        <td>{response.answer}</td>
                                        <script>{k++}</script>
                                    </tr>
                                
                               
                           
                        )
                    })}
                    </table>
                    <br></br>
                    </div>
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

export default surveysResponse;