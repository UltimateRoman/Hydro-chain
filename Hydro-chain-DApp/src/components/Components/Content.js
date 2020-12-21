import React, { Component } from 'react';
import Dropdowns from './dropdowns';
class Content extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Blockchain<br /><br /> Based DApp</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 <h4>Hydrochain shows its users with their water rate consumption and also shows the current water consumption rates. The user can pay the water bill through hydrochain using cryptocurrency </h4>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Benefits of<br /> <br /> Hydrochain</span></h1>
         </div>

         <div className="nine columns main-col">
          <h4>We are incorporating blochain to our project as using cyptocurrency to pay bills is the most secure and efficient way. It helps in transsparency too and is reliable</h4>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Water <br /><br /> consumption rates <br /> <br /> in countries</span></h1>
         </div>
            <Dropdowns />
         <div>
			</div>
      </div>
   </section>
    );
  }
}

export default Content;
