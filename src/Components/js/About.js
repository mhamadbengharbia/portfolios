import React  from 'react';
import './style.css';
import mypic from "../src/Mypic.webp";
function About() {
  return (
    <div className="about "  id="about">
    <div className='abouttop'>
        <div className='aboutleft'>
            <img src={mypic} alt='my picture' />
            </div>    
            <div className='aboutrigth'>
                <h1>About Me /></h1>
                <p className=''> As a young graduate passionate about
 information technology, I am a motivated
 System and Network Administrator with
 strong expertise in configuring, securing, and
 maintaining infrastructures. Driven by
 curiosity and a desire to learn, I seek to join a
 dynamic team where I can contribute and
 develop my professional skills.</p>
            </div>   
    </div>        
    <div className='aboutbuttom'>
        <div>
            <h3>Contact</h3>
            <p>mhamedbengharbia@gmail.com</p>
        </div>
        <div>
            <h3>Phone</h3>
            <p>(+216) 21 420 848</p>
        </div>
        <div>
            <h3>Date of birth</h3>
            <p>November 02, 1994</p>
        </div>
        <div>
            <h3>Spoken Languages</h3>
            <p>English - Arabic - French</p>
        </div>
        <div id="interets">
            <h3>Interest</h3>
            <p>Camping, Chess, Technology</p>
        </div>
    </div>
    <hr />

    </div>   

  );
}


 



export default About;
