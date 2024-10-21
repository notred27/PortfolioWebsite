import Bio from './Bio/Bio.js';
import Jobs from './Experience/Jobs.js';
import Carousel from './MobileCarousel';
import Paper from './MobilePaper.js';
import Header from './MobileHeader.js';
import About from './MobileAbout.js';



export default function Desktop() {
    return (
        // {/* Make this structure into it's own class */}

    <div style={{overflow:"hidden"}}>
        <div style={{height:"fit-content", display:"flex", flexDirection:"column", width:"98%"}}>
        <div style={{zIndex:"1", position:"relative", backgroundColor:"#1E1E1E", width:"100%", height:"100%", minHeight:"25vmin", borderBottomRightRadius:"30px"}}> 
            <Bio />

        </div>
        <div style={{zIndex:"0",position:"relative",backgroundColor:"#BB4BE4", width:"96%", height:"50px", top:"-30px", borderBottomRightRadius:"30px"}} ></div>
        </div>

   

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
        <Carousel/>

        <div style={{position:"relative"}}> 
        <div style={{overflow:"hidden"}}>
        <div className="Background-banner" style={{height:"50vh", backgroundColor:"#DF9FF6",  transform:"translate(-5%, -130%) rotate(-6deg)"}}/>
        </div>
        </div>

        <a name = "Papers"></a>
        <Header title = {"Papers and Publications!"} color = {"#EE4266"} side={"right"}/>
        <Paper/>

        <div style={{position:"relative"}}> 
        <div style={{overflow:"hidden"}}>
        <div className="Background-banner" style={{height:"50vh", backgroundColor:"#FFA3B6",transform:"translate(-5%, -130%) rotate(3.29deg)"}}/>
        </div>
        </div>

        <a name = "Jobs"></a>
        <Header title = {"Work Experience!"} color = {"#9BA2FF"} side = {"left"}/>
        {/* <Jobs/> */}

        <div style={{position:"relative"}}> 
        <div style={{overflow:"hidden"}}>
        <div className="Background-banner" style={{height:"40vh", backgroundColor:"#C9D8FF", transform:"translate(-5%, -130%) rotate(-5deg)"}}/>
        </div>
        </div>

    
    </div>

    )
}