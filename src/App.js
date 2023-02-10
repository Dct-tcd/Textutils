import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")

  const toggleMode = () =>{
     if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "#042743";
     }
     else   {setmode('light');
    
     document.body.style.backgroundColor = "white";}
  }

  return (
  <>
  <BrowserRouter>
    
   <Navbar title = "TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode}/>
   <div className='container my-5'>
            <Routes>
            <Route exact path="/about" element={<About />} />
          < Route exact path="/" element= {<Textform title="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>
          
        
      </div>
  
      </BrowserRouter>
  </>
  );
}

export default App;
