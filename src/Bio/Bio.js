import pic from './../images/picture2.png';
// import b1 from './images/b1.png';
// import b2 from './images/b2.png';


// import './App.css';
import './Bio.css';

export default function Bio() {

  // const images = [pic, b1, b2].map( (image, i) =>
  //   // Fix the animation on this (for when website is visited)
  //   <img src={image} alt="me" style={{zIndex:`${3-i}`, transform:`translate(-${i*4}%,-${i*4}%)`, position:"absolute", height:"30vh"}}/>

  // );


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
        <a href ="#About"><span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItem'>About Me</span></a>
        <a href ="#Projects"> <span style={{textDecorationColor: "#cf5ae1"}} className='BioNavItem'>Projects</span></a>

        <div className='dropdown'>   
          <span style={{textDecorationColor: "#EE4266"}} className='BioNavItem'>Papers</span>
            
          <div className='dropdownContent'>
            <a href ="#Publications">Publications</a>
            <br/>
            <a href ="#OtherPaper">Other Papers</a>
            <br/>
            <a href ="#WipPaper">In Progress...</a>

          </div>
        </div>
        


        

        <div className='dropdown'>   
          
          <a href ="#Education"><span style={{textDecorationColor: "#fdf918"}} className='BioNavItem'>Education</span></a>
            
          <div className='dropdownContent'>
            <a href ="#Education">Degree</a>
            <br/>
            <a href ="#Awards">Awards</a>
            <br/>
            <a href ="#Coursework">Coursework</a>

          </div>
        </div>


        <a href ="#Jobs"><span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItem'>Professional Experience</span></a>
        


        <div className='dropdown'>   
          
          <a><span style={{textDecorationColor: "white"}} className='BioNavItem'>Contact Me</span></a>
            
            
          <div className='dropdownContent'>
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





