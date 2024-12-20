
import './Education.css';
import Header from '../Header.js';
import logo from './../images/ur_logo.png'

export default function Education() {

      
      
  return (
    <div id = "EducationContainer">
        {/* <a name = "Education"/> */}

      <Header title = {"Degree"} color = {"#fdf918"}/>

      <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center", alignItems:"center", flexWrap:"wrap"}}>
        <span style={{textAlign:"center"}}>
          <img loading='lazy' src={logo} style={{width:"35vw", minWidth:"350px"}} alt = "UR_logo"/>
          <h2 style={{margin:"0px"}}>Hajim School of Engineering</h2>
        </span>
        
        

        <span style={{backgroundColor:"#121212", padding:"20px", boxShadow:"-6px 6px #fdf918", borderRadius:"16px", margin:"10px"}}>
          <h3 style={{margin:"10px", fontWeight:"bolder", textDecoration:"underline", textDecorationColor:"#fdf918"}}>B.S. in Computer Science; Mathematics Minor</h3>
          &nbsp;&nbsp;&nbsp;<b>Anticipated Graduation</b>: May 2025<br/>
          &nbsp;&nbsp;&nbsp;<b>GPA</b>: 3.84 / 4.0 <br/>
          &nbsp;&nbsp;&nbsp;<b>Clusters</b>:<br/>
          <ul>
            <li>(Philosophy) Knowledge, Mind, and Nature</li>
            <li>(Psychology) Psychology as a Social Science</li>
          </ul>
        </span>
      </div>
       
      {/* <a name = "Awards"/> */}

      <Header title = {"Awards"} color = {"#fdf918"}/>


      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-evenly", margin:"20px 0px 20px 0px"}}>

        <div className='achievementContainer' >
          <h3>Xerox Award for Innovation and Information Technology</h3>

            Scholarship awarded for a strong interest and achievement in information technology and computer science.
        </div>

        <div className='achievementContainer' >
          <h3>Dean's List <br/>(6 semesters)</h3>
    
            Achieved a semester period GPA of at least 3.4 while taking at least 16 credits.
          
        </div>

        <div className='achievementContainer' >
          <h3>Undergraduate Research Grant</h3>
 
          Received an academic grant to fund the submission and publication of an IEEE paper.
          
        </div>

        <div className='achievementContainer' >
          <h3>MLH Hackathon 1st Place</h3>

          Awarded 3 first place entertainment track prizes for
          <br/>
          2-Tris&nbsp;(2022), Turing&nbsp;Trouble&nbsp;(2023), Under&nbsp;Pressure&nbsp;(2024) 
          <br/>
          at U of R's yearly MLH sponsored hackathons.
 
          
        </div>

      </div>


      {/* <a name = "Coursework"/> */}

      <Header title = {"Relevant Coursework"} color = {"#fdf918"}/>


      <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"baseline", flexWrap:"wrap"}}>
      <span>

        <h3 className='subsectionTitle'>CS Courses</h3>
        <div className='courseGradeContainer'>
          <span className='courseTitle'>End-to-End Deep Learning</span>
          <span className='courseGrade'>TBD</span>


          <span className='courseTitle'>Data Structures and Algorithms</span>
          <span className='courseGrade'>A</span>

          <span className='courseTitle'>Design & Analysis of Efficient Algorithms</span>
          <span className='courseGrade'>A</span>
          
          <span className='courseTitle'>Computer Vision</span>
          <span className='courseGrade'>A</span>
          
          <span className='courseTitle'>Computational Complexity</span>
          <span className='courseGrade'>A</span>
          
          <span className='courseTitle'>Intro to Cryptography</span>
          <span className='courseGrade'>A</span>
          

          <span className='courseTitle'>Computation & Formal Systems</span>
          <span className='courseGrade'>A</span>
          

          <span className='courseTitle'>Computer Language Design & Implementation</span>
          <span className='courseGrade'>A</span>
        </div>
      </span>
      
      <span>
        <h3 className='subsectionTitle'>Math Courses</h3>
        <div className='courseGradeContainer'>
          
          <span className='courseTitle'>Graph Theory</span>
          <span className='courseGrade'>TBD</span>

          <span className='courseTitle'>Mathematical Modeling in Political Science</span>
          <span className='courseGrade'>TBD</span>

          <span className='courseTitle'>Multidimensional Calculus</span>
          <span className='courseGrade'>A-</span>

          <span className='courseTitle'>Honors Calculus III</span>
          <span className='courseGrade'>A</span>

          <span className='courseTitle'>Honors Calculus II</span>
          <span className='courseGrade'>B</span>

          <span className='courseTitle'>Honors Calculus I</span>
          <span className='courseGrade'>B+</span>

          <span className='courseTitle'>Computational Intro to Stats</span>
          <span className='courseGrade'>A-</span>

          <span className='courseTitle'>Discrete Math</span>
          <span className='courseGrade'>A-</span>
        </div>

      </span>


      <span>
        <h3 className='subsectionTitle'>Other Courses</h3>

        <div className='courseGradeContainer'>
          
          <span className='courseTitle'>Science and Reason</span>
          <span className='courseGrade'>A</span>

          <span className='courseTitle'>Data, Algorithms, Justice</span>
          <span className='courseGrade'>A</span>

          <span className='courseTitle'>Philosophy of Mind</span>
          <span className='courseGrade'>A</span>

        </div>
      </span>
      </div>

      
      

    </div>
  );
}
