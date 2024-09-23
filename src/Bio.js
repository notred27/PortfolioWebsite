import pic from './images/picture2.png';
// import b1 from './images/b1.png';
// import b2 from './images/b2.png';


import './App.css';
import './Bio.css';

export default function Bio() {

  // const images = [pic, b1, b2].map( (image, i) =>
  //   // Fix the animation on this (for when website is visited)
  //   <img src={image} alt="me" style={{zIndex:`${3-i}`, transform:`translate(-${i*4}%,-${i*4}%)`, position:"absolute", height:"30vh"}}/>

  // );


  return (

      <div id = "BioContainer">
        {/* Fill this background space with white doodles? */}


          <div >
            <img src={pic} alt="me" style={{ position:"absolute", height:"300px", bottom:"-20px", paddingLeft:"50px"}}/>
          </div>
          

          

          <div className='Bio-text'>
            <h1 className='Bio-text'> Michael Reidy</h1>
        
            {/* <h6 className='Bio-text'>mreidy3@u.rochester.edu | <a className='Bio-link' href = "https://www.linkedin.com/in/michael-reidy-122024254/">LinkedIn</a> | <a className='Bio-link' href = "https://github.com/notred27">GitHub</a></h6> */}
            <h6 className='Bio-text' style={{marginBottom:"15px"}}> CS Undergraduate, University of Rochester '25</h6>

              
          </div>


          <span className='BioNav'>
            <a href ="#About">    <span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItem'>About Me</span></a>
            <a href ="#Projects"> <span style={{textDecorationColor: "#cf5ae1"}} className='BioNavItem'>Projects</span></a>
            <a href ="#Papers">   <span style={{textDecorationColor: "#EE4266"}} className='BioNavItem'>Papers</span></a>
            <a href ="#Jobs">     <span style={{textDecorationColor: "#32eb48"}} className='BioNavItem'>Professional Experience</span></a>
            <a >     <span style={{textDecorationColor: "white"}} className='BioNavItem'>Contact Me</span></a>


          </span>

      </div>

    
  );
}





