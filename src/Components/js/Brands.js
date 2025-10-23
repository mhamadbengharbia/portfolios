import React  from "react";
import './style.css';
import inward from "../src/inward.webp";
import samsung from "../src/samsung.webp";
import worldwide from "../src/worldwide.webp";
function Brands() {
  
  
        return (
          <div class="brand"  id="projects">
            <h1>Print('Professional Experience')
            </h1>
          <div className="brand1">
          <div class="box">
            <div class="imgBx">
              <img src={inward}/>
            </div>
            <div class="content">
              <div>
                <h2>Inward</h2>
                <p>Created WordPress site with custom sections, plugins, and Woocommerce.
                </p>
                <p className="brandbtn"><a href="https://shop.inward.tn/"> Visit Website</a></p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={samsung}/>
            </div>
            <div class="content">
              <div>
                <h2>Samsung Tunisia</h2>
                <p>Developed a custom WordPress site with optimized themes, plugins, and secure content management. </p>
                <p className="brandbtn"><a href="https://samsungtunisia.com/"> Visit Website</a></p>

              </div>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={worldwide}/>
            </div>
            <div class="content">
              <div>
                <h2>worldwide-opportunities</h2>
                <p>Built a multilingual WordPress site with custom post types and caching for global performance.</p>
                <p className="brandbtn"><a href="https://worldwide-opportunities.com/"> Visit Website</a></p>

              </div>
            </div>
          </div>
          </div>
        </div>
        );
      };
    

export default Brands;
