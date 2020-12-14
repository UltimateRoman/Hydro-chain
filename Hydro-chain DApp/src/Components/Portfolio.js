import React, { Component } from 'react';
import img from './b.jpg'
import img1 from './a.png';
import img2 from './c.jpg'
class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">
            <center>
              <row>
                <column>
                <img src={img} width="380px" height="380px" />
                </column>
                &emsp;
                &emsp;
                &emsp;
                &emsp;
                <column>
                <img src={img2} width="350px" height="350px" />
                </column>
                &emsp;
                &emsp;
                &emsp;
                &emsp;
                <column>
                <img src={img1} width="300px" height="300px" />
                </column>
              </row>
             
           </center>
      </section>
    );
  }
}

export default Portfolio;
