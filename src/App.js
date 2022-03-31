import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import Login from "./components/login";
import Home from "./components/HomePage";

function App() {
  return (
    //<Router>
      <Navbar>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
      
      </Navbar>
  );
}

export default App;