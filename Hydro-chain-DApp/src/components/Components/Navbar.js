import React from 'react';

function Navbar() {
    return(
        <React.Fragment>
            <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
            <li><a href="/">Home</a></li>
            <li className="current"><a href="/dashboard">Dashboard</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
            </ul>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;