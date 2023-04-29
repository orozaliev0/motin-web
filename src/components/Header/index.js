import React, {useState} from 'react';
import Motion from'../../image/main/LogoMotion.png'
import language from '../../image/main/Ellipse 274.png'
import '../../style/main/Header.scss'
import {NavLink} from "react-router-dom";
import Courses from "../Header/Courses";

const Header = () => {

    const [courses,setCourses] = useState(false)

    return (
        <div id='header'  onMouseLeave={() => setCourses(false)}>
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}>
                        <img src={Motion} alt=""/>
                    </NavLink>
                    <div className="header__block">
                        <NavLink to={'/'}>Главное</NavLink>
                        <NavLink to={"AboutUs"}>O нас</NavLink>
                        <a onMouseOver={()=> setCourses(true)}> {courses ?  <Courses/> : ''}O курсах</a>
                        <NavLink to={"club"}>Клуб</NavLink>
                        <NavLink to={"contact"}>Контакты</NavLink>
                    </div>
                    <div className="header__language">
                        <img src={language} alt=""/>
                        <span>КР/РУС/ENG</span>
                    </div>
                </div>
            </div>
        <div>
            
        </div>
    );
};

export default Header;