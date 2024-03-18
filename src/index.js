import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import reportWebVitals from './reportWebVitals.js';
import Desktop from './Desktop.js';
import Mobile from './Mobile.js';

import FileUpload from './FileUpload.js';
import ImageDisplay from './Drop2.js';
import ImageUpload from './ImageUpload.js'
import ImageUploader from './ImageUploader.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

class Device extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight});
  };
  
  
    render() {
  
      const { width, height } = this.state;
      const isMobile = width <= height * 1.4;
        // if (isMobile) {}
      if(isMobile) {
        return <Mobile/>
      }
      else {
        return <Desktop/>

      }
    }
  }
  

// const root = ReactDOM.createRoot(document.getElementById('root'));

const addedFiles = []
const ids = []
for(let i = 0; i < 10; i++) {
  ids.push(`element_${i}`);
}


function log(files){
  console.log('added', files)

  for(let i = 0; i < files.length; i++) {
    if (addedFiles.length + i < 10) {
      addedFiles.push(files[i]);
    }
  }

  const src = ReactDOM.createRoot(document.getElementById('file_children'));
  

  src.render(
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"left", alignItems:"center", width:"100%", height:"100%"}}>

      {addedFiles.map( (file, i) => (
        <div id = {ids[i]} style={{position:"relative", width:"calc(100% / 5 - 20px)", height:"calc(100% / 3 - 20px)", border:"solid green 1px"}} key={i}> 
          <ImageDisplay file = {file}></ImageDisplay>
          {/* <div style = {{position:"absolute", top:"0", left:"0", width:"100%", height:"100%", backgroundColor:"rgba(100,0,0,0.5)", textAlign:"center", color:"white"}}><span>Fake</span></div> */}
        </div>
      ))}
    </div>
    
  )
}


function decideFiles() {

  for(let i = 0; i < addedFiles.length; i++) {
    const src = ReactDOM.createRoot(document.getElementById(`element_${i}`));

    const classification = [] //Alternatively, turn this into an array outside of this loop to somehow keep track of states
    if(Math.random() < 0.5){  //Fake
      classification.push(<div style = {{position:"absolute", top:"0", left:"0", width:"100%", height:"100%", backgroundColor:"rgba(100,0,0,0.5)", textAlign:"center", color:"white"}}><span>Fake</span></div>)

    } else {  //Real
      classification.push(<div style = {{position:"absolute", top:"0", left:"0", width:"100%", height:"100%", backgroundColor:"rgba(0,100,0,0.5)", textAlign:"center", color:"white"}}><span>Real</span></div>)
    }

    src.render(
      <div>
        <ImageDisplay file = {addedFiles[1]}/>
        {classification[0]}
      </div>
      
    )
  }
}

root.render(

  <React.StrictMode>

  
  <Device/>

  <ImageUploader/>


  {/* <div style = {{display:"flex", flexDirection:"row", alignItems:"center"}}>
    <FileUpload onUpload={log}>
      <div style={{display:"flex", width:"300px", height:"300px", border:"dashed gray 5px", borderRadius:"50px", alignItems:"center",justifyContent:"center", margin:"20px"}}>
        <span >Drop Image Files Here!</span>
      </div>
    </FileUpload>

    <div id="file_children" style={{display:"relative", margin:"20px", border:"2px solid red", width:"calc(90% - 340px)", height:"fit-content", minWidth:"600px"}}></div>
  </div>
  <button onClick={decideFiles}>Click me</button>

  <ImageUpload/> */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
