
import './Education.css';
import Header from '../Header.js';
import logo from './../images/ur_logo.png'

export default function Education() {

      
      
  return (
    <div id = "EducationContainer">
        {/* <a name = "Education"/> */}

      <Header title = {"Degree"} color = {"#fdf918"} side = {"left"}/>

      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center", flexWrap:"wrap"}}>
        <span style={{textAlign:"center"}}>
          <img loading='lazy' src={logo} style={{width:"35vw", minWidth:"350px"}}></img>
          <h4 style={{margin:"0px"}}>Hajim School of Engineering</h4>
        </span>
        
        

        <span style={{backgroundColor:"#121212", padding:"20px", boxShadow:"-6px 6px #fdf918", borderRadius:"16px", margin:"10px"}}>
          <h3 style={{margin:"0px"}}>B.S. in Computer Science; Mathematics Minor</h3>
              
          <ul>
            <li>GPA: 3.84 / 4.0</li>
            <li>Anticipated Graduation: May 2025</li>
            <li>Clusters: Psychology as a Social Science | Knowledge, Mind, and Nature </li>
          </ul>
        </span>
      </div>
       
      {/* <a name = "Awards"/> */}

      <Header title = {"Awards"} color = {"#fdf918"} side = {"left"}/>

       <ul>
       <li>Xerox Technology Scholarship</li>
        <li>Dean's List (6 semesters)</li>
        <li>Undergraduate Research Grant</li>
      </ul>


      {/* <a name = "Coursework"/> */}

      <Header title = {"Relevant Coursework"} color = {"#fdf918"} side = {"left"}/>


      <div style={{display:"flex", justifyContent:"center", alignItems:"baseline", flexWrap:"wrap"}}>
      <span>
        <h3 style={{textAlign:"center"}}>CS Courses</h3>
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>Design & Analysis of Efficient Algorithms</li>
          <li>End-to-End Deep Learning</li>
          <li>Computer Vision</li>
          <li>Computational Complexity</li>
          <li>Intro to Cryptography</li>
          <li>Computation & Formal Systems</li>
          <li>Computer Language Design & Implementation</li>



        </ul>
      </span>
      
      <span>
        <h3 style={{textAlign:"center"}}>Math Courses</h3>
        <ul>
          <li>Honors Calculus sequence</li>
          <li>Multidimensional Calculus</li>
          <li>Discrete Math</li>
          <li>Linear Algebra</li>
        </ul>
      </span>


      <span>
        <h3 style={{textAlign:"center"}}>Other Courses</h3>
        <ul>
          <li>Science and Reason</li>
          <li>Data, Algorithms, Justice</li>
          <li>Philosophy of Mind</li>
        </ul>
      </span>
      </div>

      
      

    </div>
  );
}
