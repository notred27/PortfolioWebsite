import {jobs} from "../data.js"
import './Jobs.css'
import Header from '../Header.js';

export default function Job() {
    const listItems = jobs.map((job, key) =>
      <div key={key} className="Job">
        <div>
          <span className="jobHeader">
            <h2>{job.name}</h2>
            <h4>{job.start} • {job.end}</h4>

          </span>

          <h3>{job.company}; {job.subtitle}</h3>
        </div>
        


        <ul style={{padding:"5px", marginLeft:"10px"}}>
          {job.description.map(item => <li style={{marginBottom:"10px"}}>{item}</li>)}
            
        </ul>

        <div className="tagContainer">
          {job.skills.map(skill => <span className="jobTag" >{skill} </span>)}
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