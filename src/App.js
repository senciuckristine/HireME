import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Route,Routes } from 'react-router-dom';

import NavBar from "./components/navbar.component";
import Login from "./components/login";
import Home from "./components/HomePage";
import ShowAdminsList from "./components/ShowAdminsList";
import Logout from "./components/logout";
import CreateSurvey from "./components/createSurvey";
import TakeSurvey from "./components/TakeSurvey";

const App = () =>(
  <BrowserRouter>
   <NavBar />
   <Routes >
     <Route  path="/" element={<Home/>} />
     <Route  path="/login" element={<Login/>} />
     <Route  path="/adminslist" element={<ShowAdminsList/>} />
     <Route  path="/logout" element={<Logout/>} />
     <Route path="/createSurvey" element={<CreateSurvey/>}/>
     <Route path="/takeSurvey" element={<TakeSurvey/>}/>
   </Routes >
  </BrowserRouter>
 
)

export default App;