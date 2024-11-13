import Bio from './Bio/Bio.js';
import BioMobile from './Bio/BioMobile.js';

import About from './About/About.js';
import AboutMobile from './About/AboutMobile.js';

import Projects from './Projects/Projects.js';
import ProjectsMobile from './Projects/ProjectsMobile.js';

import Publications from './Papers/Publications.js';
import PublicationsMobile from './Papers/PublicationsMobile.js';


import Jobs from './Experience/Jobs.js';

import Education from './Education/Education.js';


import SectionTitle from './SectionTitle.js';

// console.log(window.screen.width <= 500)
const isMobile = window.screen.width <= 500;

export default function Desktop() {
    return (
    <div style={{overflow:"hidden", backgroundColor:"#1e1e1e"}}>

        {isMobile ? <BioMobile/> : <Bio/>}


        <a name = "About" />
        <SectionTitle title = {"Who Am I?"} color={"#9BA2FF"} />
        {isMobile ? <AboutMobile style={{zIndex:"0"}} /> : <About style={{zIndex:"0"}} />}


        <a name = "Projects" />
        <SectionTitle title = {"Projects"} color={"#BB4BE4"} />
        {isMobile ? <ProjectsMobile/> : <Projects/>}


        <a name = "Publications" />
        <SectionTitle title = {"Papers"} color={"#EE4266"} />
        {isMobile ? <PublicationsMobile /> : <Publications />}


        <a name = "Education" />
        <SectionTitle title = {"Education"} color={"#fdf918"} />
        <Education/>


        <a name = "Jobs" />
        {isMobile ? <SectionTitle title = {"Experience"} color={"#9BA2FF"} /> : <SectionTitle title = {"Professional Experience"} color={"#9BA2FF"} />}

        <Jobs/>

    </div>

    )
}