import Bio from './Bio/Bio.js';
import BioMobile from './Bio/BioMobile.js';

import About from './About/About.js';
import AboutMobile from './About/AboutMobile.js';

import Projects from './Projects/Projects.js';
import ProjectsMobile from './Projects/ProjectsMobile.js';

import Publications from './Papers/Publications.js';
import PublicationsMobile from './Papers/PublicationsMobile.js';


import Jobs from './Experience/Jobs.js';

import Education from './Education/Education.js';

// console.log(window.screen.width <= 500)
const isMobile = window.screen.width <= 500;

export default function Desktop() {
    return (
        // {/* Make this structure into it's own class */}

    <div style={{overflow:"hidden", backgroundColor:"#1e1e1e"}}>

        {isMobile ? <BioMobile/> : <Bio/>}
        


        <a name = "About" />

        <div style={{display:"flex", width:"100%", textAlign:"center", color:"white", position:"relative", height:"fit-content", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
            <div style={{position:"absolute", top:"20px", width:"80vw", height:"10px", backgroundColor:"#9BA2FF",borderRadius:"5px", zIndex:"1"}}></div>
            <h1 style = {{position:"relative", margin:"0px", padding:"0px", zIndex:"2", backgroundColor:"#1e1e1e", width:"fit-content", paddingLeft:"2vw", paddingRight:"2vw"}}>Who Am I?</h1>
        </div>
      
        
        {isMobile ? <AboutMobile style={{zIndex:"0"}} /> : <About style={{zIndex:"0"}} />}




        <a name = "Projects" />

        <div style={{display:"flex", width:"100%", textAlign:"center", color:"white", position:"relative", height:"fit-content", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
            <div style={{position:"absolute", top:"20px", width:"80vw", height:"10px", backgroundColor:"#BB4BE4",borderRadius:"5px", zIndex:"1"}}></div>
            <h1 style = {{position:"relative", margin:"0px", padding:"0px", zIndex:"2", backgroundColor:"#1e1e1e", width:"fit-content", paddingLeft:"2vw", paddingRight:"2vw"}}>Projects</h1>
        </div>

        
        
        {isMobile ? <ProjectsMobile/> : <Projects/>}



        <a name = "Publications" />
        

        <div style={{display:"flex", width:"100%", textAlign:"center", color:"white", position:"relative", height:"fit-content", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
            <div style={{position:"absolute", top:"20px", width:"80vw", height:"10px", backgroundColor:"#EE4266",borderRadius:"5px", zIndex:"1"}}></div>
            <h1 style = {{position:"relative", margin:"0px", padding:"0px", zIndex:"2", backgroundColor:"#1e1e1e", width:"fit-content", paddingLeft:"2vw", paddingRight:"2vw"}}>Papers</h1>
        </div>

        
        {isMobile ? <PublicationsMobile /> : <Publications />}


        <a name = "Education"/>

        <div style={{display:"flex", width:"100%", textAlign:"center", color:"white", position:"relative", height:"fit-content", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
            <div style={{position:"absolute", top:"20px", width:"80vw", height:"10px", backgroundColor:"#fdf918",borderRadius:"5px", zIndex:"1"}}></div>
            <h1 style = {{position:"relative", margin:"0px", padding:"0px", zIndex:"2", backgroundColor:"#1e1e1e", width:"fit-content", paddingLeft:"2vw", paddingRight:"2vw"}}>Education</h1>
        </div>

        
        <Education/>


        <a name = "Jobs"></a>

        <div style={{display:"flex", width:"100%", textAlign:"center", color:"white", position:"relative", height:"fit-content", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
            <div style={{position:"absolute", top:"20px", width:"80vw", height:"10px", backgroundColor:"#9BA2FF",borderRadius:"5px", zIndex:"1"}}></div>
            <h1 style = {{position:"relative", margin:"0px", padding:"0px", zIndex:"2", backgroundColor:"#1e1e1e", width:"fit-content", paddingLeft:"2vw", paddingRight:"2vw"}}>Professional Experience</h1>
        </div>

        
        <Jobs/>


    
    </div>

    )
}