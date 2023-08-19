import React from 'react';
import {useNavigate} from "react-router-dom"

const Contact = () => {
const navigate = useNavigate();

return (
<>
	<h1 style={{color:"green"}}>Welcome To CONTACT Page</h1>
	<button onClick={()=>navigate(-1)}>Go Back Home</button>
</>
)
};

export default Contact;
