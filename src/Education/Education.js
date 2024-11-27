
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

      <Header title = {"Awards"} color = {"#fdf918"} side = {"left"}/>

       <ul>
       <li>Xerox Technology Scholarship</li>
        <li>Dean's List (6 semesters)</li>
        <li>Undergraduate Research Grant</li>
        <li>Dandyhacks 1st Place (3yrs)</li>

      </ul>


      {/* <a name = "Coursework"/> */}

      <Header title = {"Relevant Coursework"} color = {"#fdf918"} side = {"left"}/>


      <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"baseline", flexWrap:"wrap"}}>
      <span>

        {/* maybe make these grids, with the classes left aligned and a grade on the right? */}
        {/* DS&A        A+ */}
        {/* Comp Clx    A  */}
        {/* Theory      A  */}


        <h3 className='subsectionTitle'>CS Courses</h3>
        <div style={{display:"grid", gridTemplateColumns:"90% 10%", rowGap:"4px"}}>
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
        <div style={{display:"grid", gridTemplateColumns:"90% 10%", rowGap:"4px"}}>
          
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

        <div style={{display:"grid", gridTemplateColumns:"90% 10%", rowGap:"4px"}}>
          
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
