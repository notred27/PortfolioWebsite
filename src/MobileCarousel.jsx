
import { useState } from 'react';
import {motion} from 'framer-motion'
import {Projects} from "./data.js"
import Skill from "./Skill.js"
import button_r from "./images/button_r.png"
import button_l from "./images/button_l.png"



export default function Carousel() {
    const num_projects = Projects.length
    const [positionIndex, setPositionIndex] = useState([0,1,2,3,4,5]);

    const handleNext = () => {
        setPositionIndex((prevIndicies) =>
        {
            return prevIndicies.map((prevIndex) => ((prevIndex - 1) + num_projects)% num_projects);;
        });
    }

    const handleLast = () => {
        setPositionIndex((prevIndicies) =>
        {
            return prevIndicies.map((prevIndex) => (prevIndex + 1) % num_projects);
        });
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

        <div style={{height:"80vh"}}> 

            <div className="Carousel-mobile">
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

                <div style={{position:"absolute", left:"3.5%", backgroundColor:"#BB4BE4", width:"13%",top:"18vh", height:"10%", transform:"rotate(22deg)", borderRadius:"10px"}}></div>
                <div style={{position:"absolute", right:"7%", backgroundColor:"#BB4BE4", width:"13%",top:"18.8vh", height:"10%", transform:"rotate(-22deg)", borderRadius:"10px"}}></div>
                
                <img className="Carousel-btn-mobile" src={button_l} onClick={handleLast} style={{left:"5%"}}></img>

                <img className="Carousel-btn-mobile" src={button_r} onClick={handleNext} style={{right:"5%"}}></img>
            </div>




      
            <div  className= "Carousel-desc-container-mobile">
                <a className="Carousel-link" href={Projects[center].link} style={{display:"block", paddingBottom:"0px", fontSize:"3vh"}}>{Projects[center].title}</a>
                <p style = {{textAlign:"left", marginLeft:"5%", marginRight:"5%", fontSize:"2vh"}}>{Projects[center].description}</p>
                <Skill skills={Projects[center].skills}/>


            </div>



        </div>
    );
}