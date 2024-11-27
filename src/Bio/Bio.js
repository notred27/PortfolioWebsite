import { useState } from 'react';
import pic from './../images/picture2.png';
import pdf from "./../MR_Resume.pdf";
import './Bio.css';
import PopupWrapper from './../PopupWrapper.js';

import me from './../images/galla.png';


export default function Bio() {
  const [showContact, toggleShowContact] = useState(false);


  return (

    <div id = "BioContainer">


      

      <span style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100vw", height:"100%"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 2fr", height:"100%", placeItems:"center"}}>

            <img src={pic} alt="me" style={{ gridColumn:"1", height:"250px", borderRadius:"5px"}}/>
          
            <span style={{gridColumn:"2"}}>
              <h6 className='Bio-text' style={{marginTop:"0px", marginBottom:"-28px"}}>Hi, I'm</h6>
              <h1 className='Bio-text'> Michael Reidy</h1>
              <h6 className='Bio-text'>B.S. in Computer Science, University of Rochester '25</h6>
            </span>
        </div>
      </span>


        
      <span className='BioNav'>
        <span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItem'><a href ="/#About">About Me</a></span>
        <span style={{textDecorationColor: "#cf5ae1"}} className='BioNavItem'><a href ="/#Projects">Projects</a></span>
        <span style={{textDecorationColor: "#EE4266"}} className='BioNavItem'><a href ="/#Publications">Papers</a></span>
        <span style={{textDecorationColor: "#fdf918"}} className='BioNavItem'><a href ="/#Education">Education</a></span>
        <span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItem'><a href ="/#Jobs">Professional Experience</a></span>
        
        <span style={{textDecorationColor: "white"}} className='BioNavItem' onClick={() => (toggleShowContact(true))}>Contact Me</span>


      </span>

      {/* Pop-up contact me page */}
      {showContact && 
        <PopupWrapper>
          <div id = "PopupThanks">
            <img src = {me} alt = "michael_thanks"/>

            <div>
              <h2>Thank you for your interest!</h2>

              The best way to contact me is through either my email or cell number:
              <br/>
              &nbsp;&nbsp;<b>Email:</b> <a href ="mailto:mreidy3@u.rochester.edu">mreidy3@u.rochester.edu</a>
              <br/>
              &nbsp;&nbsp;<b>Mobile Cell:</b> <a href ="tel:+1-781-422-1367">(781) 422-1367</a>
              <br/>
              <br/>


              Additionally, you can find a current copy of my resume here: 
              <br/>
              &nbsp;&nbsp;<b>Resume: </b><a href = {pdf}><i>Michael Reidy's Resume</i></a>
              <br/>
              &nbsp;&nbsp;<i>Last updated Nov 12, 2024</i>
              <br/>

              <br/>


              Finally, you can also reach me at any of these socials:
              <br/>

              &nbsp;&nbsp;<b>GitHub: </b><a href ="https://github.com/notred27">github.com/notred27</a>
              <br/>
              &nbsp;&nbsp;<b>LinkedIn: </b><a href ="https://linkedin.com/in/michael-reidy-122024254">in/michael-reidy-122024254</a>
              <br/>
              &nbsp;&nbsp;<b>arXiv: </b><a href ="https://arxiv.org/search/cs?searchtype=author&query=Reidy,+M+P">Michael P. Reidy</a>
              <br/>
              <br/>

              <button onClick={() => (toggleShowContact(false))}>Back to Main Page</button>
            </div>
          </div>
        </PopupWrapper>}

    </div>
  );
}





