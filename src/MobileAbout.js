import {Info} from './data.js'


export default function About(){
    return (
        <div style={{marginBottom:"5%"}}>
            <div className='About-info' style={{width:"80%", marginLeft:"10%", marginBottom:"10%", borderRadius:"20px", boxShadow:"-20px 20px #9BA2FF" }}>

            <h1 className='About-item' style={{fontSize:"1.5em"}}>Hi, my name's Michael, <br></br>and I'm a <span style={{color:"#BB4BE4"}}>Software Engineer</span>!</h1>

            <h4 className='About-item'>I'm an undergraduate at the <span style={{color:"#9BA2FF"}}>University of Rochester</span> thats pursuing a <span style={{color:"#EE4266"}}>B.S. in Computer Science</span> and minoring in <span style={{color:"#EE4266"}}>Mathematics</span>.</h4>

            <h4 className='About-item2'>My main areas of interest are:</h4>
            <ul style={{marginTop:"0px"}}>
                <li><h4 className='About-item2'>Computer Vision</h4></li>
                <li><h4 className='About-item2'>Computational Complexity</h4></li>
                <li><h4 className='About-item2'>Algorithmic Analysis</h4></li>
                <li><h4 className='About-item2'>Backend Development</h4></li>
            </ul>
        </div>

            <div style = {{display:"flex", flexDirection:"row", paddingBottom:"20px"}}>
                <img src={require(`./images/${Info.images[3]}`)} alt="me" style={{zIndex:"0", backgroundColor:"#1E1E1E", boxShadow:"-10px 10px #9BA2FF", borderRadius:"10%", width:"18%", height:"60%", transform:" translate(30%, 0%)rotate(-5deg)", minInlineSize:"100px"}}/>
            
                <div style = {{display:"flex", flexDirection:"column", alignItems:"center", height:"20%"}}>

                    <img src={require(`./images/${Info.images[0]}`)} alt="me" style={{zIndex:"1", backgroundColor:"#1E1E1E", boxShadow:"-10px 10px #BB4BE4", borderRadius:"10%", width:"30%", height:"20%", transform:"translate(-10%, -15%) rotate(-6deg)", marginTop:"5%", minInlineSize:"100px"}}/>
                
                    <img src={require(`./images/${Info.images[1]}`)} alt="me" style={{zIndex:"1", backgroundColor:"#1E1E1E", boxShadow:"-10px 10px #EE4266", borderRadius:"10%", width:"60%", height:"20%", transform:"translate(-10%, 0%) rotate(6deg)", marginTop:"5%", minInlineSize:"200px"}}/>
                </div>
                
                
                <img src={require(`./images/${Info.images[2]}`)} alt="me" style={{zIndex:"0", backgroundColor:"#1E1E1E", boxShadow:"-10px 10px #EE4266", borderRadius:"10%", width:"20%", height:"60%", transform:"translate(-45%, 0%) rotate(15deg)", minInlineSize:"100px"}}/>
            </div>

            {/* <p className='About-info-mobile'>{Info.description} </p> */}

            
            <div className='About-info' style={{boxShadow:"-20px 20px #EE4266", marginLeft:"10%", marginTop:"5%", width:"80%", borderRadius:"20px"}}>

                <h4 className='About-item'>On campus, I'm part of the <span style={{color:"#BB4BE4"}}>Music Interest Floor</span> and <span style={{color:"#9BA2FF"}}>UX Design Club</span>.</h4>

                <h4 className='About-item2'>In my spare time, I enjoy:</h4>
                <ul style={{marginTop:"0px"}}>
                    <li><h4 className='About-item2'>Hanging out with friends</h4></li>
                    <li><h4 className='About-item2'>Listening to music (esp. Jazz/Alternative)</h4></li>
                    <li><h4 className='About-item2'>Reading Sci-fi books</h4></li>
                    <li><h4 className='About-item2'>Making side projects</h4></li>
                </ul>
            </div>


        </div>
    );
}