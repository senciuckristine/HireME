import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Route,Routes } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import Login from "./components/login";
import Home from "./components/HomePage";
const App = () =>(
  <BrowserRouter>
  <div className='container'>
   <Navbar />
   <Routes >
     <Route  path="/" element={<Home/>} />
     <Route  path="/login" element={<Login/>} />
   </Routes >
  </div>
  </BrowserRouter>
)

export default App;