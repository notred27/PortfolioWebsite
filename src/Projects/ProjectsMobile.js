import { useState } from "react";
import './ProjectsMobile.css'

import fone from './../images/banners/fone.png'
import aigc from './../images/banners/AIGC.png'

import twotris from './../images/banners/2tris.png'
import ttrouble from './../images/banners/turingtrouble.png'
import urready from './../images/banners/urready.png'
import catan from './../images/banners/catan.png'
import pressure from './../images/banners/pressure.png'


import button_l from './../images/button_l.png'
import button_r from './../images/button_r.png'



import github from './../images/github-mark.svg'

import turingVideo from './../images/videos/turing.mp4'
import foneVideo from './../images/videos/fone.mp4'
import catanVideo from './../images/videos/catan.mp4'
import pressureVideo from './../images/videos/underpressure.mp4'
import trisVideo from './../images/videos/2tris.mp4'




function ProjectsMobile() {
    let [bannerItems, setBannerItems] = useState([{ "img": catan, "idx": 3, "video":catanVideo  },{ "img": ttrouble, "idx": 4, "video":turingVideo }, { "img": twotris, "idx": 5, "video": trisVideo }, { "img": fone, "idx": 0, "video":foneVideo }, { "img": pressure, "idx": 7, "video":pressureVideo },{ "img": aigc, "idx": 1, "video":"noneYet" }, { "img": urready, "idx": 2, "video":"noneYet"  }]);   
    let [selectedIdx, setSelectedIdx] = useState(0);

    const center = Math.floor(bannerItems.length / 2)

    function shiftItems() {
        setBannerItems((prevItems) => [...prevItems.slice(1), prevItems[0]])
        setSelectedIdx(bannerItems[center +1]["idx"]);

    }

    function selectItem(idx) {
        setSelectedIdx(idx)
    }

    function shiftItemsBack() {
        setBannerItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)])
        setSelectedIdx(bannerItems[center -1]["idx"]);

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

                <div className="infoVideo" style={{width: "70vw", height:"20vh", alignSelf: "center" }}>

                <video style={{borderRadius:"20px"}} width="100%" height="100%" autoPlay muted loop src={getVideo(selectedIdx)} type="video/mp4" />
            
       


                </div>


                <span id = "bannerIconContainerm" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} onAnimationIteration={shiftItems}>
                    {bannerItems.map((item, idx) =>
                        <img loading="lazy" src={item.img} ey = {idx} className="bannerIconm" alt = "project_banner" onClick={() => { selectItem(item.idx) }} style={{ opacity: `${selectedIdx === item.idx ? "1" : "0.4"}` }} />
                    )}

                </span>


                <div style={{width:"100vw", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", justifyItems:"center", alignItems:"center", marginTop:"5px"}}>
                    <img alt="shift_left_button" style = {{height:"30px", transform:"rotate(20deg)"}} src = {button_l} onClick={shiftItemsBack}/>
                    <span></span>
                    <img alt="shift_right_button" style = {{height:"30px", transform:"rotate(-20deg)"}} src = {button_r} onClick={shiftItems}/>
                </div>




                <div className="infoContainerm" style={{ display: `${selectedIdx === 0 ? "block" : "none"}` }}>
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


                    {/* tagms: React, AWS, Firestore, Google Auth, Figma */}
                    <div style={{ position: "absolute", bottom: "-20px", left: "20px" }}>
                        Tags:
                        <span className="tagm">React</span>
                        <span className="tagm">AWS Amplify</span>
                        <span className="tagm">Firestore</span>
                        <span className="tagm">Google Auth</span>
                        <span className="tagm">Figma</span>
                    </div>


                </div>

                <div className="infoContainerm" style={{ display: `${selectedIdx === 7 ? "block" : "none"}` }}>
                    <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <h1>Under Pressure!</h1>

                        <a href="https://github.com/YAGOTAGO/DandyHacks24">
                            <img loading="lazy" src={github} alt="github" className="githubMark" />
                        </a>

                    </span>

                    <p>Reach the surface, but don't crack from the pressure!</p>

                    <li><i>Under Pressure</i> is a 3D game by myself, Tiago Davies, Caroline Li, and Rae Zhang for U of R's DandyHacks 2024</li>
                    <li>There are 6 unique components that may break at any time, so keep an eye for things you need to fix.</li>

                    <li>All of our 3D assets, animations, and logic was created by our team, and we used public domain sound effects.</li>
                    <li>Won <b>1st place</b> in Entertainment track, as well as the <b>Most Dandy Hack</b> at U of R's yearly Hackathon (DandyHacks '24).</li>
                    <br />
                    You can download a build of the game&nbsp;<a href="https://tdavies.itch.io/under-pressure">here</a>!
                    <br />


                    {/* Tags: React, AWS, Firestore, Google Auth, Figma */}
                    <div style={{ position: "absolute", bottom: "-10px", left: "20px" }}>
                        Tags:
                        <span className="tag">GoDot</span>
                        <span className="tag">GDscript</span>
                        <span className="tag">Blender</span>
                        <span className="tag">3D Animation</span>

                        {/* <span className="tag">Firestore</span>
                        <span className="tag">Google Auth</span>
                        <span className="tag">Figma</span> */}
                    </div>


                </div>



                <div className="infoContainerm" style={{ display: `${selectedIdx === 1 ? "block" : "none"}` }}>
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




                    <div style={{ position: "absolute", bottom: "-20px", left: "20px" }}>
                        Tags:
                        <span className="tagm">MATLAB</span>
                        <span className="tagm">Resnet-50</span>
                        <span className="tagm">Bayer Array</span>

                    </div>
                </div>


                <div className="infoContainerm" style={{ display: `${selectedIdx === 2 ? "block" : "none"}` }}>
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



                    <div style={{ position: "absolute", bottom: "-20px", left: "20px" }}>
                        Tags:
                        <span className="tagm">Python</span>
                        <span className="tagm">Selenium</span>
                        <span className="tagm">Tkinter</span>
                        <span className="tagm">React</span>
                    </div>
                </div>


                <div className="infoContainerm" style={{ display: `${selectedIdx === 3 ? "block" : "none"}` }}>
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


                    <div style={{ position: "absolute", bottom: "-20px", left: "20px" }}>
                        Tags:
                        <span className="tagm">Python</span>
                        <span className="tagm">Figma</span>
                        <span className="tagm">Web sockets</span>
                    </div>
                </div>


                <div className="infoContainerm" style={{ display: `${selectedIdx === 4 ? "block" : "none"}` }}>
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



                    <div style={{ position: "absolute", bottom: "-20px", left: "20px" }}>
                        Tags:
                        <span className="tagm">C#</span>
                        <span className="tagm">Unity</span>
                        <span className="tagm">Hackathon</span>
                    </div>


                </div>

                <div className="infoContainerm" style={{ display: `${selectedIdx === 5 ? "block" : "none"}` }}>
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



                    <div style={{ position: "absolute", bottom: "-20px", left: "20px" }}>
                        Tags:
                        <span className="tagm">Python</span>
                        <span className="tagm">Pygame</span>
                        <span className="tagm">Hackathon</span>
                    </div>

                </div>

            </div>


            
            



            <br />

            {/* I also create smaller side projects, which can be seen here */}
        </div>)
}

export default ProjectsMobile;