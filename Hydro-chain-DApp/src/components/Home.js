import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Content from './Components/Content';
import Portfolio from './Components/Portfolio';

function Home() {
    return (
        <React.Fragment>
            <Header />
            <About />
            <Content />
            <Portfolio />
            <Footer />
        </React.Fragment>
    );
}

export default Home;