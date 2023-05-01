import React from 'react';
import {NavLink} from "react-router-dom";
import '../Courses/courses.scss'

const Courses = () => {
    return (
        <div className="courses">
            <NavLink to={"/MainFr"} className="courses--a">FrontEnd</NavLink>
            <NavLink to={"UxUi"} className="courses--a">UI/UX design</NavLink>
            <NavLink to={"backend"} className="courses--a">BackEnd</NavLink>
        </div>
    );
};

export default Courses;