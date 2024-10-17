import Bio from './Bio';
import Jobs from './Jobs';
import Carousel from './Carousel';
import Paper from './Paper.js';
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';

import { Papers } from "./data";


export default function Desktop() {
    return (
        // {/* Make this structure into it's own class */}

    <div style={{overflow:"hidden"}}>
        {/* <div style={{height:"30vmin", display:"flex", flexDirection:"column", width:"100%", paddingBottom:"30px"}}>
        <div style={{zIndex:"1", position:"relative", backgroundColor:"#position:"relative", height:"280px", display:"flex", flexDirection:"row", overflow:"hidden"", width:"100%", height:"100%", minHeight:"25vmin", borderBottomRightRadius:"30px", boxShadow:"-15px 15px #BB4BE4"}}> 

        </div>
        <div style={{zIndex:"0",position:"relative",backgroundColor:"#BB4BE4", width:"96%", height:"60px", top:"-30px", borderBottomRightRadius:"30px"}} ></div>
        </div> */}
        <Bio/>

        


        <div style={{position:"relative"}}> 
        <div style={{overflow:"hidden"}}> 
        <div className="Background-banner" style={{height:"50vh", backgroundColor:"#DF9FF6",  transform:"translate(-5%, -90%) rotate(-3deg)"}}/>
        </div>
        </div>

        <a name = "About"></a>
        <Header title = {"Who am I?"} color = {"#9BA2FF"} side = {"right"}/>
        <About style={{zIndex:"0"}} />

        <div style={{position:"relative"}}> 
        <div style={{overflow:"hidden"}}>
        <div className="Background-banner" style={{height:"40vh", backgroundColor:"#C9D8FF", transform:"translate(-5%, -150%) rotate(8deg)"}}/>
        </div>
        </div>

        <a name = "Projects"></a>
        <Header title = {"Projects!"} color = {"#BB4BE4"} side = {"left"}/>
        {/* <Carousel/> */}
        <Projects></Projects>


        {/* <div style={{position:"relative"}}> 
        <div style={{overflow:"hidden"}}>
        <div className="Background-banner" style={{height:"50vh", backgroundColor:"#DF9FF6",  transform:"translate(-5%, -130%) rotate(-6deg)"}}/>
        </div>
        </div> */}


        <a name = "Papers"></a>
        <Header title = {"Publications!"} color = {"#EE4266"} side={"right"}/>

        {/* <h1>IEEE 2023 International Conference on Big Data</h1> */}
        <span style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>

            <Paper paper={Papers[0]} appearsIn={"Published in"} location={"IEEE 2023 International Conference on Big Data"}/>
        </span>

        <Header title = {"Other Papers!"} color = {"#EE4266"} side={"left"}/>

        {/* <h1>arxiv's Computational Complexity Archive</h1> */}
        <span style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", flexWrap:"wrap"}}>
            <Paper paper={Papers[1]} appearsIn={"Located in"} location={"arxiv's Computational Complexity Archive"}/>
            <Paper paper={Papers[2]} appearsIn={"Located in"} location={"arxiv's Computational Complexity Archive"}/>
        </span>



        <div style={{position:"relative"}}> 
        <div style={{overflow:"hidden"}}>
        <div className="Background-banner" style={{height:"30vh", backgroundColor:"#FFA3B6",transform:"translate(-5%, -200%) rotate(3.29deg)"}}/>
        </div>
        </div>

        <a name = "Jobs"></a>
        <Header title = {"Professional Experience!"} color = {"#9BA2FF"} side = {"right"}/>
        <Jobs/>

        <div style={{position:"relative"}}> 
        <div style={{overflow:"hidden"}}>
        <div className="Background-banner" style={{height:"40vh", backgroundColor:"#C9D8FF", transform:"translate(-5%, -130%) rotate(-5deg)"}}/>
        </div>
        </div>

        {/* <a name = "AI"></a>
        <Header title = {"AI Classifier!"} color = {"#BB4BE4"} side = {"right"}/> */}

    
    </div>

    )
}