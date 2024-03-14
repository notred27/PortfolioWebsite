
import { Papers } from "./data";
import './MobilePaper.css';




export default function Paper() {
  const Items = ({items}) => (
    <div style={{marginBottom:"15px", fontSize:"2vmin", padding:"1%", paddingLeft:"5%"}}> 
    {
      items.map(item =>(
        <li>{item}</li>
      ))
    }
    </div>
  );

  // Maybe do something based on indexing to alternate these paper pages / info
    const papers = Papers.map(paper =>
      <div className="mPaper">

        <div style={{display:"flex", flexDirection:"row", width:"100%"}}>
 
            <img className="mPaper-Img" alt = "paper image" src={require('./images/' + paper.image)} style={{borderRadius:"10px", border:"5px solid #EE4266", float:"left", width:"40vw"}}></img>

            <div style={{display:"flex", flexDirection:"column"}}>
              <div style={{width:"100%", height:"100%", position:"relative", margin:"0px"}}>
                <a href={paper.link} className="Paper-title" style={{display:"block", width:"95%", position:"absolute", bottom:"0", fontWeight:"bold", fontSize:"2.8vmin",textAlign:"left", marginLeft:"15px", marginBottom:"0px", padding:"5px",paddingBottom:"0px",  color:"#1E1E1E"}}>{paper.title}</a>
              </div>

              <div className="Paper-text" >
                {paper.description.map(item =>(
                    <li>{item}</li>
                  ))}
              </div>
            </div>

        </div>

      </div>
    );

    return (
        <div style={{width:"100%", height:"fit-content", overflow:"hidden", justifyContent:"center"}}>
          {papers}
        </div>
      );
}

