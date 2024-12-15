import React from 'react';
import Banner from './HomeComponents/Banner/Banner';
import OurServices from './HomeComponents/OurServices/OurServices';
import AboutUs from './HomeComponents/AboutUs/AboutUs';
import Features from './HomeComponents/Features/Features';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
            <Features></Features>
        </div>
    );
};

export default Homepage;