
import './Education.css';
import Header from '../Header.js';


export default function Education() {

      
      
  return (
    <div id = "EducationContainer">

      <div style={{display:"flex", justifyContent:"center", alignItems:"baseline"}}>
        <span>
          <h1>University of Rochester</h1>
          <h4>Hajim School of Engineering</h4>
        </span>
        

        <span>
          <h3>B.S. in Computer Science; Mathematics Minor</h3>
              
          <ul>
            <li>GPA: 3.84 / 4.0</li>
            <li>Anticipated Graduation: May 2025</li>
            <li>Clusters: Psychology as a Social Science & Knowledge, Mind, and Nature </li>
          </ul>
        </span>
      </div>
       

      <Header title = {"Awards"} color = {"#fdf918"} side = {"left"}/>

       <ul>
       <li>Xerox Technology Scholarship</li>
        <li>Dean's List (all 8 semesters)</li>
        <li>Undergraduate Research Grant</li>
      </ul>



      <Header title = {"My Most Relevant Course Work"} color = {"#fdf918"} side = {"left"}/>


      <div style={{display:"flex", justifyContent:"center", alignItems:"baseline"}}>
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
