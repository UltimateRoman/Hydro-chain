import React, { Component } from 'react';

class About extends Component {
  render() {

    
    return (
      <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <h2>About our project</h2>
            <div className="row">
               <div className="columns contact-details">
               
               </div>
               <div className="columns download">
                  <h3 style={{color:"white"}}>
                     Hydro chain is blockchain based dapp that calculates the water consumed by the user and helps the user pay the bill using cyrptocurrency in the most secure aand reliale way
                  </h3>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
