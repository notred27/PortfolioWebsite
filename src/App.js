// src/App.js or src/App.tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import necessary components
import Desktop from "./Desktop.js";
import RedirectToRiftingWrapped from './RedirectToRiftingWrapped.js'


function App() {
  return (
    <div>
    {/* //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </nav> */}

      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/wrapped2024" element={<RedirectToRiftingWrapped />} />
        <Route path="/maggle" element={<RedirectToMaggle />} />
      </Routes>
    </div>
  );
}

export default App;
