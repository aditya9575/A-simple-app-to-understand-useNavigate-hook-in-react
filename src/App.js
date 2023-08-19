import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    
      <div className="app">
      

      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      </>
       

      </div>
    
  );
}

export default App;