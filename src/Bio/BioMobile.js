import pic from './../images/picture2.png';
import pdf from "./../MR_Resume.pdf";
import './BioMobile.css';

export default function BioMobile() {


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
        <a href ="#About"><span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItemm'>About Me</span></a>
        <a href ="#Projects"> <span style={{textDecorationColor: "#cf5ae1"}} className='BioNavItemm'>Projects</span></a>

        <div className='dropdownm'>   
          <span style={{textDecorationColor: "#EE4266"}} className='BioNavItem'>Papers</span>
            
          <div className='dropdownContentm'>
            <a href ="#Publications">Publications</a>
            <br/>
            <a href ="#OtherPaper">Other Papers</a>
            <br/>
            <a href ="#WipPaper">In Progress...</a>

          </div>
        </div>
        


        

        <div className='dropdownm'>   
          
          <a href ="#Education"><span style={{textDecorationColor: "#fdf918"}} className='BioNavItemm'>Education</span></a>
            
          <div className='dropdownContentm'>
            <a href ="#Education">Degree</a>
            <br/>
            <a href ="#Awards">Awards</a>
            <br/>
            <a href ="#Coursework">Coursework</a>

          </div>
        </div>


        <a href ="#Jobs"><span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItemm'>Professional Experience</span></a>
        


        <div className='dropdownm'>   
          
          <a><span style={{textDecorationColor: "white"}} className='BioNavItemm'>Contact Me</span></a>
            
            
          <div className='dropdownContent'>
            <a href = {pdf}>Resume</a>
            <br/>
            <a href ="mailto:mreidy3@u.rochester.edu">Email</a>
            <br/>
            <a href ="https://github.com/notred27">GitHub</a>
            <br/>
            <a href ="https://linkedin.com/in/michael-reidy-122024254">LinkedIn</a>

          </div>
        </div>
      </span>

    </div>
  );
}





