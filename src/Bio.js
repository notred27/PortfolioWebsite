import pic from './images/picture2.png';
import b1 from './images/b1.png';
import b2 from './images/b2.png';


import './App.css';

export default function Bio() {
  const Positions ={
    0 : {offset: "0%"},
    1 : {offset: "5%"},
    2 : {offset: "10%"},

  }
  const images = [pic, b1, b2].map( (image, i) =>
    // Fix the animation on this (for when website is visited)
    <img src={image} alt="me" style={{zIndex:`${3-i}`, transform:`translate(-${i*4}%,-${i*4}%)`, position:"absolute", height:"30vh"}}/>

  );


  return (
    <div className="Bio-header">
     
        <div className='Bio-pic-container'>
          {/* <img src={pic} className="Bio-pic" alt="me" />
          <img src={b1} className="Bio-pic-overlay1" alt="me" />
          <img src={b2} className="Bio-pic-overlay2" alt="me" /> */}


          {images}
        </div>
        
        <div className='Bio-text'>
            <h1 style={{fontSize:"max(5vw, 2em)", margin:"0%"}}> Michael Reidy</h1>
   
            <h6 style={{marginTop:"0em", marginBottom:"1em", fontSize:"max(0.8em, 1vw)"}}> CS Undergraduate | U of R class of 2025 | mreidy3@u.rochester.edu | <a className='Bio-link' href = "https://www.linkedin.com/in/michael-reidy-122024254/">LinkedIn</a> | <a className='Bio-link' href = "https://github.com/notred27">GitHub</a></h6>

            <p>
                Hi! My name's Michael and I'm currently an undergraduate pursuing a B.S. in Computer Science, with a minor in Mathematics.
                My main areas of interest are computer vision and complexity theory.
            </p>
            
        </div>

    </div>
    
    
  );
}





