import React, { Component } from 'react';

class Footer extends Component {
  render() {

  

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           
           <ul className="copyright">
              <li style={{color: "white"}}>&copy; Copyright 2020 Black-Stallions</li>
            </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
