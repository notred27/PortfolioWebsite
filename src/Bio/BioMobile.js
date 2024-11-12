import { useState } from 'react';
import pic from './../images/picture2.png';
import pdf from "./../MR_Resume.pdf";
import './BioMobile.css';
import sidebar from './../images/sidebar.png';

import PopupWrapper from './../PopupWrapper.js';

import me from './../images/galla.png';


export default function BioMobile() {
  const [showContact, toggleShowContact] = useState(false);

  return (

    <div id = "BioContainerm">

      <span style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", width:"100vw", height:"100%"}}>
        

            <img src={pic} alt="me" style={{ gridColumn:"1", height:"50vw", borderRadius:"5px"}}/>
          
            <span >
              <h6 className='Bio-textm' style={{margin:"0px"}}>Hi, I'm</h6>
              <h1 className='Bio-textm'> Michael Reidy</h1>
              <h6 className='Bio-textm'>B.S. in Computer Science, University of Rochester '25</h6>
            </span>
     
      </span>
        
      <span className='BioNavm'>
        

        <div className='dropdownm'>   
        <span style={{display:"flex", alignItems:"center", color:"white", padding:"5px"}}>
          <b>More Info</b> &nbsp; <img src = {sidebar} alt='sidebar_icon' style={{width:"30px"}}/> 

        </span>
            
          <div className='dropdownContentm'>
            <hr></hr>
            <span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItemm'><a href ="#About">About Me</a></span>
            <br/>
            <br/>

            <span style={{textDecorationColor: "#cf5ae1"}} className='BioNavItemm'><a href ="#Projects">Projects</a></span>
            <br/>
            <br/>

            <span style={{textDecorationColor: "#EE4266"}} className='BioNavItemm'><a href ="#Publications">Papers</a></span>
            <br/>
            <br/>

            <span style={{textDecorationColor: "#fdf918"}} className='BioNavItemm'><a href ="#Education">Education</a></span>
            <br/>
            <br/>

            <span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItemm'><a href ="#Jobs">Experience</a></span>
            <br/>
            <br/>

            <span style={{textDecorationColor: "white"}} className='BioNavItemm' onClick={() => (toggleShowContact(true))}>Contact Me</span>
            <br/>
            &nbsp;
          </div>
        </div>
      </span>

        {/* Pop-up contact me page */}
        {showContact && 
        <PopupWrapper>
          <div id = "PopupThanksm">
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
              <img src = {me} alt='michael_standing' style={{height:"25vh"}}/>


              <h1 style={{margin:"10px"}}>Thank you for your interest!</h1>
            </div>
            

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
        </PopupWrapper>}

    </div>
  );
}





