import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Services />
            <Portfolio />
            {/* <Clients /> */}
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

