import {Info} from './data.js'
import './About.css'

export default function About(){
    return (
        <div style={{marginBottom:"5%"}}>
            

            <div style = {{display:"flex", flexDirection:"row"}}>

                <div className='AboutInfo'>
                    <h1>Hi, my name's Michael, and I'm a <span style={{color:"#BB4BE4"}}>Software Engineer</span>!</h1>
                    <h4>I'm an undergraduate at the <span style={{color:"#9BA2FF"}}>University of Rochester</span> who's pursuing a <span style={{color:"#EE4266"}}>B.S. in Computer Science</span> and <span style={{color:"#EE4266"}}>Mathematics Minor</span>.</h4>
                </div>


            
                <div style={{display:"grid", gridTemplateRows:"1fr 1fr", gridTemplateColumns:"1fr 1fr 1fr", width:"40%", height:"300px", gap:"20px"}}>
                    <img src={require(`./images/${Info.images[3]}`)} alt="me" className="ImageGridItem" style={{gridRow:"1 / span 2"}}/>
                    <img src={require(`./images/${Info.images[1]}`)} alt="me" className="ImageGridItem" style={{gridRow:"1", gridColumn:"2"}}/>
                    <img src={require(`./images/${Info.images[0]}`)} alt="me" className="ImageGridItem" style={{gridRow:"2", gridColumn:"2"}}/>
                    <img src={require(`./images/${Info.images[2]}`)} alt="me" className="ImageGridItem" style={{gridRow:"1 / span 2", gridColumn:"3"}}/>
                </div>


            </div>


            <div className='AboutInfo' style={{marginLeft:"45%"}}>
                <h4>My main areas of interest are:</h4>
                    <ul style={{marginTop:"0px"}}>
                        <li><span style={{fontWeight:"bold"}}>Computer Vision:</span> Creating shallow and deep-learning classifiers for detecting AI-generated content.</li>
                        <li><span style={{fontWeight:"bold"}}>Deep Learning</span></li>

                        <li><span style={{fontWeight:"bold"}}>Computational Complexity:</span> Analyzing and classifying the runtime of algorithms.</li>
                        <li><span style={{fontWeight:"bold"}}>Computational Social Choice (COMSOC):</span> Analyzing the complexity of election systems to detect vulnerabilities.</li>
                        <li><span style={{fontWeight:"bold"}}>Full Stack Development:</span> Building and deploying powerful applications that are satisfying to use.</li>
                    </ul>
            </div>


            <div className='AboutInfo'>

                <h4>On campus, I'm part of the <span style={{color:"#BB4BE4"}}>Music Interest Floor</span> and <span style={{color:"#9BA2FF"}}>Rochester Design Hub</span>. In my spare time, I enjoy:</h4>
                <ul style={{marginTop:"0px"}}>
                    <li>Hanging out with friends</li>
                    <li>Listening to music (esp. Jazz/Alternative)</li>
                    <li>Reading Sci-fi books</li>
                    <li>Making side projects</li>
                </ul>
            </div>
        </div>
    );
}