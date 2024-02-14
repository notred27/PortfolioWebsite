import {jobs} from "./data.js"
import Skill from "./Skill.js"


export default function Job() {
    const listItems = jobs.map(job =>
        <div key={job.id} className="Job">
          <h3 style={{marginBottom:"2px"}}>{job.name}</h3>
          <h6 style={{color:"rgb(210, 210, 210)",margin:"2px"}} >{job.company}</h6>
          <h6 style={{color:"rgb(210, 210, 210)",margin:"2px"}} >{job.start} • {job.end}</h6>
          <p style={{margin:"5px", paddingLeft:"5px", paddingRight:"5px"}}>
              {job.description}
          </p>

          <Skill skills={job.skills}/>

        </div>

    );

    return (
      <div className="Job-container">
        {listItems}
        
      </div>
    );
  }