

export default function Skill({skills, color}) {
    const listItems = skills.map(skill =>
        <div className="Skill" style={{backgroundColor:`${color}`}}>
            <p>{skill}</p>
        </div>
        );
    
    return (
        <div className="Skill-container">
            {listItems}
        </div>
    );
  }


    