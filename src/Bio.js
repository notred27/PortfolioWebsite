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

      <div style={{display:"flex", flexDirection:"row"}}>
      
          <div >
            <img src={pic} alt="me" style={{ position:"absolute", height:"25vmin", bottom:"0", paddingLeft:"5vmin"}}/>
          </div>
          

          

          <div className='Bio-text'>
            <h1 className='Bio-text'> Michael Reidy</h1>
        
            <h6 className='Bio-text'>mreidy3@u.rochester.edu | <a className='Bio-link' href = "https://www.linkedin.com/in/michael-reidy-122024254/">LinkedIn</a> | <a className='Bio-link' href = "https://github.com/notred27">GitHub</a></h6>
            <h6 className='Bio-text'> CS Undergraduate, U of R class of 2025</h6>


          </div>

      </div>

    
  );
}





