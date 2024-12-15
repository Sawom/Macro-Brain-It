import React from 'react';
import Banner from './HomeComponents/Banner/Banner';
import OurServices from './HomeComponents/OurServices/OurServices';
import AboutUs from './HomeComponents/AboutUs/AboutUs';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Homepage;