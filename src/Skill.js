

export default function Skill({skills}) {
    const listItems = skills.map(skill =>
        <div className="Skill">
            <p>{skill}</p>
        </div>
        );
    
    return (
        <div className="Skill-container">
            {listItems}
        </div>
    );
  }


    