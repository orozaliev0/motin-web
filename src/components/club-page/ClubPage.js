import React from 'react';
import Hero from "../Club/Hero/Hero";
import Club from "../Club/Club/Club";
import Project from "../Club/Project/Project";
import Last from "../Club/Last/Last";

const ClubPage = () => {
    return (
        <div>
            <Hero/>
            <Club/>
            <Project/>
            <Last/>
        </div>
    );
};

export default ClubPage;