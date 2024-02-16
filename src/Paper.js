
import { Papers } from "./data";
import './Paper.css';




export default function Paper() {
  const Items = ({items}) => (
    <div style={{color:"white", marginTop:"15px", fontSize:"1vw"}}> 
    {
      items.map(item =>(
        <li>{item}</li>
      ))
    }
    </div>
  );

    const papers = Papers.map(paper =>
      <div className="Paper">

          <a href={paper.link}>
            <img className="Paper-Img" alt = "paper image" src={require('./images/' + paper.image)} style={{borderRadius:"10px"}}></img>
          </a>

          <div className="Paper-text">
            <b2  style={{fontWeight:"bold", color:"white"}}>{paper.title}</b2>
            <Items items = {paper.description} />
          </div>

      </div>

    );

    return (
        <div style={{display:"flex", width:"100%", height:"35vw", overflow:"hidden", justifyContent:"center"}}>
          {papers}
        </div>
      );
}

