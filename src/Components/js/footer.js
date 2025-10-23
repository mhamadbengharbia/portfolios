import React  from "react";
import "./style.css";
import link from "../src/linkedin.webp";
import Gith from "../src/github.webp";
import Mail from "../src/mail.webp";
import tel from "../src/tel.webp";
 


 
 

function Footer() { 
    const currentYear = new Date().getFullYear();

 

  return (
    <div className="Footer">
 <div className="topfooter">
    <h1>Let's Connect
    </h1>
<div>
<a href='https://www.linkedin.com/in/mhamed-ben-gharbia/'  target="_blank" 
  rel="noopener noreferrer">  <img src={link} alt="LinkedIn" /></a> 
         <a href='https://github.com/mhamadbengharbia'  target="_blank" 
  rel="noopener noreferrer"> <img src={Gith} alt="GitHub" /></a> 
         <a href='mailto:mhamedbengharbia@gmail.com' target="_blank" 
  rel="noopener noreferrer" > <img src={Mail} alt="Mail" /></a> 
         <a href='tel:+21621420848' target="_blank" 
  rel="noopener noreferrer" > <img src={tel} alt="Telephone" /></a> 
    </div>
 </div>



 <div className="buttomfooter">
 <p>©{currentYear} Mhamed Ben Gharbia. All Rights Reserved.</p>
 </div>
</div>
  );
}

export default Footer;


 