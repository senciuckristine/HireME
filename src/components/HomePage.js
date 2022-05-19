import React, { Component } from 'react';

export default class HomePage extends Component {
  static displayName = HomePage.name;

  render () {
    const handleTakeSurvey = () => {
      window.location = "/takeSurvey";
    }
    return (
      <body background="back3.jpg">
      <div>
      <br></br><br></br>
        <h6 align="center">Are you ready to start a new journey?</h6>
        <button className="button01" onClick={handleTakeSurvey}>Take a survey</button>
         </div>
         </body>
    );
  }
}