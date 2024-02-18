import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Bio from './Bio';
import Jobs from './Jobs';
import Carousel from './Carousel';
import Paper from './Paper.js';
import Header from './Header.js';
import About from './About.js';


import reportWebVitals from './reportWebVitals.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>



  {/* Make this structure into it's own class */}
  <div style={{height:"fit-content", display:"flex", flexDirection:"column", width:"95%"}}>
    <div style={{zIndex:"1", position:"relative", backgroundColor:"#1E1E1E", width:"100%", height:"100%", minHeight:"25vmin", borderBottomRightRadius:"30px"}}> 
      <Bio/>

    </div>
    <div style={{zIndex:"0",position:"relative",backgroundColor:"#BB4BE4", width:"96%", height:"60px", top:"-30px", borderBottomRightRadius:"30px"}} ></div>
  </div>


  <div className="Background-banner" style={{height:"50vh", backgroundColor:"#DF9FF6",  transform:"translate(-5%, -90%) rotate(-3deg)"}}/>


  <Header title = {"Who am I?"} color = {"#9BA2FF"} side = {"right"}/>
  <About style={{zIndex:"0"}} />
  <div className="Background-banner" style={{height:"40%", backgroundColor:"#C9D8FF", transform:"translate(-5%, -150%) rotate(8deg)"}}/>

  <Header title = {"Projects!"} color = {"#BB4BE4"} side = {"left"}/>
  <Carousel/>
  <div className="Background-banner" style={{height:"50vh", backgroundColor:"#DF9FF6",  transform:"translate(-5%, -130%) rotate(-6deg)"}}/>


  <Header title = {"Papers and Publications!"} color = {"#EE4266"} side={"right"}/>
  <Paper/>
  <div className="Background-banner" style={{height:"50%", backgroundColor:"#FFA3B6",transform:"translate(-5%, -130%) rotate(3.29deg)"}}/>



  <Header title = {"Work Experience!"} color = {"#9BA2FF"} side = {"left"}/>
  <Jobs/>
  <div className="Background-banner" style={{height:"40%", backgroundColor:"#C9D8FF", transform:"translate(-5%, -130%) rotate(-5deg)"}}/>




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
