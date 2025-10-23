import React from 'react';
import './style.css';
import img1 from "../src/server.webp";
import img2 from "../src/reseau.webp";
import img3 from "../src/web.webp";

function Skills() {
 

  return (
    <div className="Skills"  id="skills">
      <div className='skillstop'>
        <h1>I'm Glad You're Still Here</h1>
        <p>"Like a child solving a puzzle, I find passion in designing and implementing networking solutions that connect systems seamlessly and enhance communication."
        </p>
      </div>

    <div className='buttomskills'>
        <div> 
            <img src={img2} />    
            <h1>CCNA</h1>
            <p>I implement and troubleshoot network systems following CCNA standards, focusing on building robust, efficient, and scalable network infrastructures.

</p>
            <h1>Key Skills & Tools:</h1>
            <ul>
    <li>Network Configuration</li>
    <li>Routing and Switching</li>
    <li>Subnetting & VLSM</li>
    <li>RIP & OSPF Dynamic Routing</li>
    <li>IPv4 / IPv6 Addressing</li>
    <li>RIP OSPF Dynamic Routing</li>
    <li>NAT & LAN/WAN Design</li>
    <li>Virtualization</li>
    <li>Network Security</li>
</ul>
        </div>
       
       

        <div> 
            <img src={img1} />    
            <h1>Systems Administration </h1>
<p>I specialize in modern IT and networking technologies, delivering secure, efficient, and scalable solutions tailored to today’s infrastructure demands.</p>
<h1>Technologies:</h1>
<ul>
    <li>FTP</li>
    <li>RADIUS</li>
    <li>NFS</li>
    <li>DNS</li>
    <li>LDAP</li>
    <li>pfSense / Snort</li>
     <li>Apache</li>
    <li>Telnet SSH</li>
     <li>Samba</li>
</ul>
        </div>




        <div> 
            <img src={img3} />    
            <h1>Development Skills</h1>
            <p>I enjoy coding from scratch, building intuitive interfaces with clean design patterns and structured content, bringing ideas to life in the browser.
            </p>
            <h1>Languages & Tools:</h1>
            <ul>
    <li>MERN</li>
    <li>Python, Flask</li>
    
    <li>C# / .NET</li>
    <li>JavaScript</li>
    <li>Express</li>
    <li>SQL</li>
     <li>OOP</li>
    <li>WordPress</li>
     <li>GitHub</li>
</ul>
        </div>
    </div>
 
    </div>
  );
}

export default Skills;
