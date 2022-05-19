import React, { Component } from 'react';

export default class HomePage extends Component {
  static displayName = HomePage.name;

  render () {
   
    return (
      <body background="back3.jpg">
      <div>
      <br></br><br></br>
        <h6 align="center">take the survey</h6>
        <button className="button01" >Take a survey</button>
         </div>
         </body>
    );
  }
}