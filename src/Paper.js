
import './Paper.css';




export default function Paper({paper, appearsIn, location}) {



  return (
    <div className="Paper">
      <img loading="lazy" className="PaperImg" alt="paper image" src={require('./images/' + paper.image)} />


      <div className="PaperInfo">

        <h1>{paper.title}</h1>

        <h4>
          <span style={{color: "#E90031", backgroundColor: "#FFBECB", borderRadius: "3px", padding: "2px" }}>Authors:</span> 
          &nbsp;
        
          {paper.authors.map((name, idx) => 
            { return <span style={{fontWeight:`${name === "Michael\xA0Reidy" ? "bold" : "normal"}`}}>
                        {(idx ? ', ': '')}{name}
                      </span>})
            }
        </h4>

        <h4>{appearsIn} <a href={paper.link}>{location}</a>.</h4>

        <button>Read More Here!</button>

      </div>

    </div>
  );
}

