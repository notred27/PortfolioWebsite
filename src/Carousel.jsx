
import { useState } from 'react';
import {motion} from 'framer-motion'
import {Projects} from "./data.js"
import Skill from "./Skill.js"
import button_r from "./images/button_r.png"
import button_l from "./images/button_l.png"



export default function Carousel() {
    const num_projects = Projects.length
    const [positionIndex, setPositionIndex] = useState([0,1,2,3,4,5]);
    const [animationPlaying, setanimationPlaying] = useState(false);


    const handleNext = () => {
        if (animationPlaying){
            return
        }

        setPositionIndex((prevIndicies) =>
        {
            return prevIndicies.map((prevIndex) => ((prevIndex - 1) + num_projects)% num_projects);
        });

        setTimeout(() => {
            setanimationPlaying(false);
            console.log("jeepers")
          }, 600);
    }

    const handleLast = () => {
        if (animationPlaying){
            return
        }

        setPositionIndex((prevIndicies) =>
        {
            return prevIndicies.map((prevIndex) => (prevIndex + 1) % num_projects);
        });

        setTimeout(() => {
            setanimationPlaying(false);
          }, 600);
    }

    const center = positionIndex.indexOf(0);

    const positions = ["center",
                       "left_f",
                        "left_b",
                        "back",
                        "right_b",
                        "right_f",
                    ];

    const Positions = {
        center: {x: "45%", y:"25%", scale: 1, zIndex: 5},
        left_f: {x: "5%", y:"0%", scale: 0.7, zIndex: 3, opacity:0.9},
        left_b: {x: "17%", y:"-20%", scale: 0.5, zIndex: 1, opacity:0.75},
        right_f: {x: "85%", y:"0%", scale: 0.7, zIndex: 3, opacity:0.9},
        right_b: {x: "73%", y:"-20%",  scale: 0.5, zIndex: 2, opacity:0.75},
        back: {x: "45%", y:"-30%",  scale: 0.4, zIndex: 0, opacity:0.6},
    };

    
    return (

        <div className="Carousel-container" style={{border:"solid green 2px"}}> 

            <div className="Carousel" style={{border:"solid red 2px"}}>
                {Projects.map((project, index) => (
                    <motion.img
                        key = {index}
                        src = {require('./images/' + project.image)}
                        className="Carousel-item"
                        initial = "center"
                        animate = {positions[positionIndex[index]]}
                        variants = {Positions}
                        transition = {{duration:0.8, ease:"easeInOut"}}
                        style={{ position: 'absolute', width:"50%", borderRadius: "10px", border: "6px solid #1E1E1E", backgroundColor:"#1E1E1E"}}
                    />
                ))}

                {/* <button className="Carousel-btn" style={{left:"5%"}} onClick={handleLast} src = {button_l}><img src={button_l}></img></button>
                <button className="Carousel-btn" style={{right:"5%"}} onClick={handleNext}><img src={button_r}></img></button> */}

                <div style={{position:"absolute", left:"4.5%", backgroundColor:"#BB4BE4", width:"13%",top:"15.5vw", height:"16%", transform:"rotate(22deg)", borderRadius:"10px"}}></div>
                <div style={{position:"absolute", right:"7%", backgroundColor:"#BB4BE4", width:"13%",top:"16vw", height:"16%", transform:"rotate(-22deg)", borderRadius:"10px"}}></div>
                
                <img className="Carousel-btn" src={button_l} onClick={() => {setanimationPlaying(true); handleLast()}} style={{left:"5%"}}></img>

                <img className="Carousel-btn" src={button_r} onClick={() => {setanimationPlaying(true); handleNext()}} style={{right:"5%"}}></img>
            </div>




      
            <div  className= "Carousel-desc-container">
                <a className="Carousel-link" href={Projects[center].link}>{Projects[center].title}</a>
                <p style = {{textAlign:"center", marginLeft:"5%", marginRight:"5%", marginBottom:"12%"}}>{Projects[center].description}</p>
                
                <span style={{position:"absolute", bottom:"0px"}}>
                <Skill skills={Projects[center].skills}/>

                </span>


            </div>



        </div>
    );
}