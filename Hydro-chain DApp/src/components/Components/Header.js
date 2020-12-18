import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

   
    return (
       
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="/#home">Home</a></li>
            <li><a className="smoothscroll" href="/#about">About</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
         </ul>
      </nav>
      
      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">HYDRO-CHAIN</h1>
            <h3>The decentralized application for transparent water bill payments.</h3>
            <hr />
            <ul className="social">
               <a href="/dashboard" className="button btn project-btn"><i className="fa fa-book"></i>Go To Dashboard</a>
            </ul>
         </div>
      </div>
      

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
