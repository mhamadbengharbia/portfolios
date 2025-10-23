import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";  
import "./App.css";
import Hero from "./Components/js/Hero";
import About from "./Components/js/About";
import Brands from "./Components/js/Brands";
import Diplomes from "./Components/js/Diplomes";
import Skills from "./Components/js/Skills";
 import Contact from "./Components/js/Contact.js";
 import Footer from "./Components/js/footer.js";
import Pfe from "./Components/js/Pfe.js";

 import aws from "../src/Components/src/azure.webp";
 import azure from "../src/Components/src/aws.webp";
 import isetbiz from "../src/Components/src/isetbiz.webp";
 import oracle from "../src/Components/src/oracle.webp";

 
 import cdj from "../src/Components/src/cdj.webp";
 
  import ccna from "../src/Components/src/ccna.webp";

 function App() {
  const [currentImage, setCurrentImage] = useState(cdj);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through all 4 images
      setCurrentImage((prevImage) => {


        if (prevImage === cdj) return ccna;
        if (prevImage === ccna) return isetbiz;
        if (prevImage === isetbiz) return aws;
        if (prevImage === aws) return azure;
        if (prevImage === azure) return oracle;

        return cdj; // Back to the first image
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);


  // Common animation settings
  const animationSettings = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="App">



      <motion.div
        initial={animationSettings.initial}
        whileInView={animationSettings.whileInView}
        transition={animationSettings.transition}
        viewport={animationSettings.viewport}
      >
      <div className="stickedimg">
        <img src={currentImage} alt="Image" className="sticky-image" />
      </div>
        
      </motion.div>
      {/* Animate Hero */}
      <motion.div
        initial={animationSettings.initial}
        whileInView={animationSettings.whileInView}
        transition={animationSettings.transition}
        viewport={animationSettings.viewport}
      >
        <Hero />
        
      </motion.div>
 



      {/* Animate About */}
      <motion.div
        initial={animationSettings.initial}
        whileInView={animationSettings.whileInView}
        transition={animationSettings.transition}
        viewport={animationSettings.viewport}
      >
        <About/>
      </motion.div>

      {/* Animate Diplomes */}
      <motion.div
        initial={animationSettings.initial}
        whileInView={animationSettings.whileInView}
        transition={animationSettings.transition}
        viewport={animationSettings.viewport}
      >
        <Diplomes />
      </motion.div>

      {/* Animate Brands */}
      <motion.div
        initial={animationSettings.initial}
        whileInView={animationSettings.whileInView}
        transition={animationSettings.transition}
        viewport={animationSettings.viewport}
      >
        <Brands />
      </motion.div>
     <motion.div
        initial={animationSettings.initial}
        whileInView={animationSettings.whileInView}
        transition={animationSettings.transition}
        viewport={animationSettings.viewport}
      >
        <Pfe />
      </motion.div>
      {/* Animate Skills */}
      <motion.div
        initial={animationSettings.initial}
        whileInView={animationSettings.whileInView}
        transition={animationSettings.transition}
        viewport={animationSettings.viewport}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={animationSettings.initial}
        whileInView={animationSettings.whileInView}
        transition={animationSettings.transition}
        viewport={animationSettings.viewport}
      >
        <Contact />
      </motion.div>
      


      <motion.div
        initial={animationSettings.initial}
        whileInView={animationSettings.whileInView}
        transition={animationSettings.transition}
        viewport={animationSettings.viewport}
      >
        <Footer />
      </motion.div>




    </div>
  );
}

export default App;
