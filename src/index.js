import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Bio from './Bio';
import Jobs from './Jobs';
import Carousel from './Carousel';

import Paper from './Paper.js';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Bio/>
    
    <div style={{backgroundColor:"#977390", margin:"0px", borderBottom:"1px solid #977390"}}>
      <div style={{textAlign:"center", width:"100%", borderTop: "10px solid #785589"}}>
        <b3 style={{color:"white", fontSize:"max(3vw, 2em)", position:"relative", fontWeight:"bold"}}>Project Showcase</b3>
      </div>
      <Carousel/>
    </div>

    <div style={{textAlign:"center", width:"100%", borderTop:"10px solid #BB8A89", margin:"0px"}}>
      <b3 style={{color:"white", fontSize:"max(3vw, 2em)", position:"relative", fontWeight:"bold"}}>Publications</b3>
   
      <Paper/>
   
    </div>


    <div style={{textAlign:"center", width:"100%", borderTop: "10px solid #785589", backgroundColor:"#977390"}}>
      <b3 style={{color:"white", fontSize:"max(3vw, 2em)", position:"relative", fontWeight:"bold"}}>Work Experience</b3>
    <Jobs/>
      
      
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
