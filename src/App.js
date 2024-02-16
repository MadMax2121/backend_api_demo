
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from "./test";
import { useEffect } from "react";
function App() {

  return (

      <Router>
        <Routes>
          <Route path="/test" element={<h1>test directory</h1>} />
          <Route path="/" element={<Test/>} />
         
        </Routes>
      </Router>
 
  )
};

export default App;
