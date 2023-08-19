import React from 'react';
import {useNavigate} from "react-router-dom"
  
const Home = () => {
  const navigate = useNavigate();
    
  return (
      <>
        <h1 style={{color:"red"}}>useNavigate hook demonstration</h1>
        <button onClick={()=>navigate("/about")}>About</button>
        <button onClick={()=>navigate("/contact")}>Contact</button>
      </>
  )
};
  
export default Home;