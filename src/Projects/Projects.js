import { useState } from "react";
import './Projects.css'

import fone from './../images/banners/fone.png'
import aigc from './../images/banners/AIGC.png'

import twotris from './../images/banners/2tris.png'
import ttrouble from './../images/banners/turingtrouble.png'
import urready from './../images/banners/urready.png'
import catan from './../images/banners/catan.png'

import button_l from './../images/button_l.png'
import button_r from './../images/button_r.png'



import github from './../images/github-mark.svg'

import turingVideo from './../images/videos/turing.mp4'
import foneVideo from './../images/videos/fone.mp4'
import catanVideo from './../images/videos/catan.mp4'




function Projects() {
    let [bannerItems, setBannerItems] = useState([{ "img": fone, "idx": 0, "video":foneVideo }, { "img": aigc, "idx": 1, "video":"noneYet" }, { "img": urready, "idx": 2, "video":"noneYet"  }, { "img": catan, "idx": 3, "video":catanVideo  }, { "img": ttrouble, "idx": 4, "video":turingVideo }, { "img": twotris, "idx": 5, "video":"noneYet"  }]);
    let [selectedIdx, setSelectedIdx] = useState(0);


    function shiftItems() {
        setBannerItems((prevItems) => [...prevItems.slice(1), prevItems[0]])
        // setSelectedIdx((prevIdx) => (prevIdx + 1));
    }

    function shiftItemsBack() {
        setBannerItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)])
    }

    function getVideo(idx) {
        for(let i = 0; i < bannerItems.length; i++) {
            if(idx === bannerItems[i]["idx"]) {
                return bannerItems[i]["video"]
            }
        }
    }

    return (
        <div id = "ProjectContainer">
            <div  style={{ display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:"wrap"}}>

                <div className="infoVideo" style={{ alignSelf: "center", height:"auto" }}>

                <video style={{borderRadius:"20px"}} width="auto" height="300px" autoPlay muted loop src={getVideo(selectedIdx)} type="video/mp4" />
            
       


                </div>

                <div className="infoContainer" style={{ display: `${selectedIdx === 0 ? "block" : "none"}` }}>
                    <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h1>Fone!</h1>

                        <a href="https://github.com/notred27/Fone">
                            <img loading="lazy" src={github} alt="github" className="githubMark" />
                        </a>

                    </span>

                    <p>Create real projects with fake conversations.</p>

                    <li>Fone is a real-time chatting application that I developed which can mimic popular messaging apps like imessage, Google messages, and What's App.</li>

                    <li>Implemented a variety of objects that can be added and customized in the chatroom, such as timestamps, images, headers, and read receipts.</li>
                    <li>Created a full-stack application using React for the front end, and Google Firestore for the backend database.</li>
                    <li>Satisfied Progressive Web App <a href="https://web.dev/explore/progressive-web-apps">(PWA)</a> requirements so Fone can be downloaded as an application, and integrated Google Authentication for users. </li>

                    <br />
                    A demo of the project that is hosted using AWS Amplify can be found <a href="https://main.dtrjhr0w2mwu1.amplifyapp.com">here</a>.


                    {/* Tags: React, AWS, Firestore, Google Auth, Figma */}
                    <div style={{ position: "absolute", bottom: "-10px", left: "20px" }}>
                        Tags:
                        <span className="tag">React</span>
                        <span className="tag">AWS Amplify</span>
                        <span className="tag">Firestore</span>
                        <span className="tag">Google Auth</span>
                        <span className="tag">Figma</span>
                    </div>


                </div>


                <div className="infoContainer" style={{ display: `${selectedIdx === 1 ? "block" : "none"}` }}>
                    <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h1>AI Image Classifier</h1>

                        <a href="https://github.com/notred27/CFA-Interpolation-Classifiers-on-Identifying-AIGC">
                            <img loading="lazy" src={github} alt="github" className="githubMark" />
                        </a>

                    </span>

                    <p>A feature extractor for detecting AI-Generated images.</p>

                    <li>Developed a feature extractor that detects Color Filter Array (CFA) artifacts in an image, and can be passed into a classifiers to detect if the image was artificially generated.</li>
                    <li>CFAs are used (in addition to interpolation algorithms) by digital cameras to turn raw sensor data into a full-color digital image, but can potentially leave behind image artifacts.</li>
                    <li>This extractor approximates the original raw image and then applies one of 4 popular interpolation algorithms to create an approximate image, before taking the absolute difference between the two.</li>
                    <li>Both a simple thresholding model and a fully connected neural net were trained on this feature, and both performed at higher than human levels of accuracy.</li>

                    {/* <br/> */}

                    {/* Paper info here? */}




                    <div style={{ position: "absolute", bottom: "-10px", left: "20px" }}>
                        Tags:
                        <span className="tag">MATLAB</span>
                        <span className="tag">Resnet-50</span>
                        <span className="tag">Bayer Array</span>

                    </div>
                </div>


                <div className="infoContainer" style={{ display: `${selectedIdx === 2 ? "block" : "none"}` }}>
                    <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h1>UR Ready!</h1>

                        <a href="https://github.com/notred27/youre-ready">
                            <img loading="lazy" src={github} alt="github" className="githubMark" />
                        </a>

                    </span>

                    <p>A course scheduling tool for students at the University of Rochester.</p>

                    <li>Developed both a Python application and a website for a course scheduler at the University of Rochester.</li>
                    <li>Provided an updated user experience to U of R's <a href="https://cdcs.ur.rochester.edu/">CDCS</a>.</li>
                    <li>Added new features such as a saved classed tab (for courses you may want to take), as well as a weekly schedule builder.</li>
                    <li>Implemented a web scrapper to get data for the application.</li>



                    <div style={{ position: "absolute", bottom: "-10px", left: "20px" }}>
                        Tags:
                        <span className="tag">Python</span>
                        <span className="tag">Selenium</span>
                        <span className="tag">Tkinter</span>
                        <span className="tag">React</span>
                    </div>
                </div>


                <div className="infoContainer" style={{ display: `${selectedIdx === 3 ? "block" : "none"}` }}>
                    <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h1>Catan</h1>

                        <a href="https://github.com/notred27/Catan">
                            <img loading="lazy" src={github} alt="github" className="githubMark" />
                        </a>

                    </span>

                    <p>Play with up to 3 friends in an online version of this classic game.</p>

                    <li>Implemented the popular tabletop game Catan into a digital format using Python and Pygame.</li>
                    <li>Integrated local hosting through threaded web sockets, so anyone on a local connection can play together.</li>
                    <li>Designed the stylized look of the game with Figma.</li>
                    <li>This project is still in development, with a few game features (such as development cards and a win condition) left to be added.</li>


                    <div style={{ position: "absolute", bottom: "-10px", left: "20px" }}>
                        Tags:
                        <span className="tag">Python</span>
                        <span className="tag">Figma</span>
                        <span className="tag">Web sockets</span>
                    </div>
                </div>


                <div className="infoContainer" style={{ display: `${selectedIdx === 4 ? "block" : "none"}` }}>
                    <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h1>Turing Trouble</h1>

                        <a href="https://github.com/notred27/Turing-Trouble">
                            <img loading="lazy" src={github} alt="github" className="githubMark" />
                        </a>

                    </span>

                    <p>Help Alan the Turing Machine reach the end of the tape!</p>

                    <li>Created a game based around the idea of Turing Machines, where you need to implement transition functions to reach the end of a level.</li>
                    <li>I worked along side my friends Tiago Davies and Anu Kumar to create the game using Unity and C#.</li>
                    <li>Helped implement a modular design (using Scriptable Objects) to dynamically load level information into the GameObjects to reduce the complexity of creating new levels.</li>
                    <li>Won 1st place in the Entertainment track during U of R's yearly 43 hour Hackathon (DandyHacks '23).</li>

                    <br />

                    You can play the game for yourself <a href="https://tdavies.itch.io/turing-trouble">here</a>!



                    <div style={{ position: "absolute", bottom: "-10px", left: "20px" }}>
                        Tags:
                        <span className="tag">C#</span>
                        <span className="tag">Unity</span>
                        <span className="tag">Hackathon</span>
                    </div>


                </div>

                <div className="infoContainer" style={{ display: `${selectedIdx === 5 ? "block" : "none"}` }}>
                    <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h1>2-Tris</h1>

                        <a href="https://github.com/notred27/Turing-Trouble">
                            <img loading="lazy" src={github} alt="github" className="githubMark" />
                        </a>

                    </span>

                    <p>As a reimagining of Tetris as a two-person shooter, 2-Tris brings a new twist to a classic game! Play with a friend and try to time your shots to push and rotate the pieces into place!</p>



                    <li>I worked along side my friends Tiago Davies, Cole Henslee, and Alvin Jiang to create the game using Python's Pygame library.</li>
                    <li>Utilized matrix representations of blocks to easily calculate positions and collisions for the backend of the game.</li>
                    <li>Won 1st place in the Entertainment track, as well as Best UI/UX, during U of R's yearly Hackathon (DandyHacks '22).</li>



                    <div style={{ position: "absolute", bottom: "-10px", left: "20px" }}>
                        Tags:
                        <span className="tag">Python</span>
                        <span className="tag">Pygame</span>
                        <span className="tag">Hackathon</span>
                    </div>

                </div>

            </div>


            <span id = "bannerIconContainer" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
                {bannerItems.map(item =>
                    <img loading="lazy" src={item.img} className="bannerIcon" onClick={() => { setSelectedIdx(item.idx) }} style={{ opacity: `${selectedIdx === item.idx ? "1" : "0.4"}` }} />
                )}

            </span>


            <div style={{width:"100vw", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", justifyItems:"center", alignItems:"center", marginTop:"14px"}}>
                <img style={{transform:"rotate(20deg)", boxShadow:"-10px 10px #bb57e0", borderRadius:"10px"}} src = {button_l} onClick={shiftItemsBack}/>
                <span></span>
                <img style={{transform:"rotate(-20deg)", boxShadow:"-10px 10px #bb57e0", borderRadius:"10px"}} src = {button_r} onClick={shiftItems}/>


            </div>
            



            <br />

            {/* I also create smaller side projects, which can be seen here */}
        </div>)
}

export default Projects;