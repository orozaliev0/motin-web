import React from 'react';
import Hero from "../AboutUS/Hero/Hero";
import Founders from "../AboutUS/Founders/Founders";
import License from "../AboutUS/License/License";
import Gallery from "../AboutUS/Gallery/Gallery";

const AboutPage = () => {
    return (
        <div>
            <Hero/>
            <Founders/>
            <License/>
            <Gallery/>
        </div>
    );
};

export default AboutPage;