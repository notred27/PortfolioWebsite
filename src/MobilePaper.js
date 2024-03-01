
import { Papers } from "./data";
import './Paper.css';




export default function Paper() {
  const Items = ({items}) => (
    <div style={{marginBottom:"15px", fontSize:"1vw", padding:"1%", paddingLeft:"5%"}}> 
    {
      items.map(item =>(
        <li>{item}</li>
      ))
    }
    </div>
  );

    const papers = Papers.map(paper =>
      <div className="Paper">

          <div style={{display:"flex", flexDirection:"row", width:"100%"}}>
            <div style={{width:"100%", height:"100%", position:"relative"}}>
              <a href={paper.link}>
                <img className="Paper-Img" alt = "paper image" src={require('./images/' + paper.image)} style={{borderRadius:"10px", border:"10px solid #EE4266", float:"left"}}></img>
              </a>
            </div>

            <div style={{width:"100%", height:"100%", position:"relative", margin:"0px"}}>
              <a href={paper.link} className="Paper-title" style={{width:"100%", position:"absolute", bottom:"0", fontWeight:"bold", fontSize:"1.3vmax",textAlign:"left", padding:"5px", color:"#1E1E1E", transform:"translate(-60%, -10%)"}}>{paper.title}</a>
            </div>
          </div>

          <div className="Paper-text">
            <Items items = {paper.description} />
          </div>

      </div>

    );

    return (
        <div style={{width:"100%", height:"fit-content", overflow:"hidden", justifyContent:"center"}}>
          {papers}
        </div>
      );
}

