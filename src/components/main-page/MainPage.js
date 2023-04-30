import React from 'react';
import Hero from "./Hero/Hero";
import AboutUS from "./AboutUs/AboutUS";
import Courses from "./Courses/Courses";
import Project from "./Project";
import Slick from "./Slick";
import Last from "./Last/Last";
import FAQ from "./FAQ/FAQ";

import Motion from "./Motion/Motion";

const MainPage = () => {

    return (
        <div>
            <Hero/>
            <AboutUS/>
            <Courses/>
            <Motion/>
            <Project/>
            <Slick/>
            <FAQ/>
            <Last/>
        </div>
    );
};

export default MainPage;