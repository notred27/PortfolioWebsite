import {jobs} from "../data.js"
import './Jobs.css'
import Header from '../Header.js';

export default function Job() {
    const listItems = jobs.map(job =>
      <div key={job.id} className="Job">
        <span>
          <span style={{display:"flex", flexDirection:"row", alignItems:"center", margin:"0px", justifyContent:"space-between", width:"100%"}}>
            <h2>{job.name}</h2>
            <h4 style={{color:"rgb(210, 210, 210)", margin:"0px"}} >{job.start} • {job.end}</h4>

          </span>

          <h3 style={{paddingBottom:"5px", color:"rgb(210, 210, 210)"}}>{job.company}; {job.subtitle}</h3>
        </span>
        


        <p style={{padding:"5px"}}>
            {job.description}
        </p>

        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
          { job.skills.map(skill => <span className="jobTag" > {skill} </span> )}
        </div>
        

      </div>

    );

    return (
      <div id = "ExperienceContainer">
        <Header title = {"Professional Employment History"} color = {"#9BA2FF"} side = {"left"}/>

        <div className="jobContainer">
        {listItems}


        </div>
        
      </div>
    );
  }