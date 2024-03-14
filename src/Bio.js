import pic from './images/picture2.png';
import b1 from './images/b1.png';
import b2 from './images/b2.png';


import './App.css';

export default function Bio() {

  const images = [pic, b1, b2].map( (image, i) =>
    // Fix the animation on this (for when website is visited)
    <img src={image} alt="me" style={{zIndex:`${3-i}`, transform:`translate(-${i*4}%,-${i*4}%)`, position:"absolute", height:"30vh"}}/>

  );


  return (

      <div style={{display:"flex", flexDirection:"row"}}>
      
          <div >
            <img src={pic} alt="me" style={{ position:"absolute", height:"25vmin", bottom:"0", paddingLeft:"5vmin"}}/>
          </div>
          

          

          <div className='Bio-text'>
            <h1 className='Bio-text'> Michael Reidy</h1>
        
            <h6 className='Bio-text'>mreidy3@u.rochester.edu | <a className='Bio-link' href = "https://www.linkedin.com/in/michael-reidy-122024254/">LinkedIn</a> | <a className='Bio-link' href = "https://github.com/notred27">GitHub</a></h6>
            <h6 className='Bio-text' style={{marginBottom:"15px"}}> CS Undergraduate, U of R Class of 2025</h6>

              <a href ="#About"><span style={{color:"white", backgroundColor:"#282828", width:"fit-content", padding:"5px", margin:"5px", borderRadius:"7px", boxShadow:"-3px 3px #9BA2FF"}}>About</span></a>
              <a href ="#Projects"><span style={{color:"white", backgroundColor:"#282828", width:"fit-content", padding:"5px", margin:"5px", borderRadius:"7px", boxShadow:"-3px 3px #BB4BE4"}}>Projects</span></a>
              <a href ="#Papers"><span style={{color:"white", backgroundColor:"#282828", width:"fit-content", padding:"5px",margin:"5px", borderRadius:"7px", boxShadow:"-3px 3px #EE4266"}}>Papers</span></a>
              <a href ="#Jobs"><span style={{color:"white", backgroundColor:"#282828", width:"fit-content", padding:"5px", margin:"5px",borderRadius:"7px", boxShadow:"-3px 3px #9BA2FF"}}>Jobs</span></a>
              <a href ="#AI"><span style={{color:"white", backgroundColor:"#282828", width:"fit-content", padding:"5px", margin:"5px",borderRadius:"7px", boxShadow:"-3px 3px #BB4BE4"}}>AI Classifier</span></a>

          </div>

      </div>

    
  );
}





