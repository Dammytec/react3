import './App.css';
import About from "./About";
import Services from "./services"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/about' element={<About />}  />
            <Route path='/service' element={<Services />} />
        </Routes>
      </BrowserRouter>
        
    </>
  )
 
}

export default App
