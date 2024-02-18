
import { useState } from 'react';
import {motion} from 'framer-motion'
import {Projects} from "./data.js"
import Skill from "./Skill.js"


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

        <div className="Carousel-container"> 

            <div className="Carousel">
                {Projects.map((project, index) => (
                    <motion.img
                        key = {index}
                        src = {require('./images/' + project.image)}
                        className="Carousel-item"
                        initial = "center"
                        animate = {positions[positionIndex[index]]}
                        variants = {Positions}
                        transition = {{duration:0.8, ease:"easeInOut"}}
                        style={{ position: 'absolute', width:"50%", borderRadius: "10px", border: "4px solid #0D160B", backgroundColor:"#0D160B"}}
                    />
                ))}

                <button className="Carousel-btn" style={{left:"5%"}} onClick={handleLast}>Last</button>
                <button className="Carousel-btn" style={{right:"5%"}} onClick={handleNext}>Next</button>
            </div>

            <div className= "Carousel-desc-container">
                <a className="Carousel-link" href={Projects[center].link}>{Projects[center].title}</a>
                <p style = {{marginLeft:"5%", marginRight:"5%", textAlign:"center", fontSize:"2vmin"}}>{Projects[center].description}</p>
                <Skill skills={Projects[center].skills}/>
            </div>

        </div>
    );
}