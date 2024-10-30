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

            <img src={pic} alt="me" style={{ gridColumn:"1", height:"300px", }}/>
          
            <span style={{gridColumn:"2"}}>
              <h6 className='Bio-text' style={{marginTop:"0px", marginBottom:"-28px"}}>Hi, I'm</h6>
              <h1 className='Bio-text'> Michael Reidy</h1>
              <h6 className='Bio-text'>B.S. in Computer Science, University of Rochester '25</h6>
            </span>
        </div>
      </span>
        
      <span className='BioNav'>
        <a href ="#About">    <span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItem'>About Me</span></a>
        <a href ="#Projects"> <span style={{textDecorationColor: "#cf5ae1"}} className='BioNavItem'>Projects</span></a>
        <a href ="#Papers">   <span style={{textDecorationColor: "#EE4266"}} className='BioNavItem'>Papers</span></a>
        <a href ="#Education">     <span style={{textDecorationColor: "#fdf918"}} className='BioNavItem'>Education</span></a>
        <a href ="#Jobs">     <span style={{textDecorationColor: "#9BA2FF"}} className='BioNavItem'>Professional Experience</span></a>
        <a ><span style={{textDecorationColor: "white"}} className='BioNavItem'>Contact Me</span></a>
      </span>

    </div>
  );
}





