
import './PublicationsMobile.css';
import { Papers } from "./../data.js";
import Header from '../Header.js';


export default function PublicationsMobile() {
  const Items = Papers.map((paper, key) => (
      
      <div className="Paperm" key={key}>
      <img loading="lazy" className="PaperImgm" alt="paper_preview" src={require('./../images/' + paper.image)} />


      <div className="PaperInfom">

          <h1>{paper.title}</h1>

          <h4>
          <span style={{color: "#E90031", backgroundColor: "#FFBECB", borderRadius: "3px", padding: "1px" }}>Authors:</span> 
          &nbsp;
          
          {paper.authors.map((name, idx) => 
              { return <span key = {`${key}_${idx}`} style={{fontWeight:`${name === "Michael\xA0Reidy" ? "bold" : "normal"}`}}>
                  {(idx ? ', ': '')}{name}
              </span>})
              }
          </h4>

          <h4>{paper.appearsIn} <a href={paper.link}>{paper.location}</a></h4>

          {paper.location !== "" && <button>Read More Here!</button>}
          

      </div>

      </div>
    ));


  return (
    <div id = "PublicationContainerm">
      <a name = "Publications"/>
      <Header title = {"Publications!"} color = {"#EE4266"}/>


      <span style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>

          {Items[0]}
      </span>

      <a name = "OtherPaper"/>
      <Header title = {"Other Papers!"} color = {"#EE4266"}/>


      <span style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", flexWrap:"wrap"}}>
        {Items[1]}
        {Items[2]}
      </span> 

      <a name = "WipPaper"/>
      <Header title = {"In Progress..."} color = {"#EE4266"}/>


      <span style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", flexWrap:"wrap"}}>
        {Items[3]}
        {Items[4]}
      </span> 
    </div>
  );
}
