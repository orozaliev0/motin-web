import React from 'react';
import Hero from "../main/Hero/Hero";
import AboutUS from "../main/AboutUs/AboutUS";
import Courses from "../main/Courses/Courses";
import Motion from "../main/Motion/Motion";
import Project from "../main/Project";
import Slick from "../main/Slick";
import Last from "../main/Last/Last";
import FAQ from "../main/FAQ/FAQ";

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