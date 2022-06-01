import React, { Component } from 'react';

export default class HomePage extends Component {
  static displayName = HomePage.name;

  render () {
    
    
    return (
        <body  background="back3.jpg">
        <div>
          <br></br><br></br>
          <div><p className='styleAboutUs'>About Us</p></div>
        
          <br></br>
      <br></br>
      <div className="splitscreen" >
        <div className="left"> 
         <div>
            <br></br>
            <div className='grid2About'><br></br>
                <h2 >What problem have we discovered ?</h2>
                <br></br>
                <p className='h44About'>&emsp; Many IT companies struggle with finding good employees. They hire a huge Human Resources team to manage to cope with the tones of job applications and hundreds of interviews.</p>
                <p className='h44About'>&emsp; Companies end up paying a lot of money and investing a lot of time in phone calls or HR interviews which can be automated easily.</p>
                <br></br>
                <h2 >What is our solution ?</h2>
                <br></br>
                <p className='h44About'>&emsp; We came with a more inexpensive and easy to use approach when talking about pre-interview discussions or HR interviews.</p>
                <p className='h44About'>&emsp; Our website gives companies the opportunity to create a custom survey specially designed to fit their needs. They can add as many questions as they like. Every survey has an unique token which you give to your job applicants. </p>
                <p className='h44About'>&emsp; Companies have administrators accounts and they can see their own surveys and the responses from the applicants. </p>

                <br></br><br></br>
            </div>
        </div>
        </div>
        <div className="right">
            <img src="interviu.jpg" alt="Interview" width="550" height="400" className='imgStyle'></img>
        </div>
      </div>
      
      <br></br><br></br>
      
          </div>
          </body>
    );
  }
}