import React, {useState} from 'react';
import Motion from '../../image/main/LogoMotion.png'
import language from '../../image/main/Ellipse 274.png'
import '../../style/main/Header.scss'
import '../../style/main/media/MediaHeader.scss'
import {NavLink} from "react-router-dom";
import Courses from "../Header/Courses";
import Menu from "./Menu/Menu";

const Header = () => {

    const [courses, setCourses] = useState(false)
    const items = [{value : 'О нас', href : '/aboutUs' },{value : 'Frontend', href : 'frontend' },{value : 'backend', href : 'backend' },{value : 'UxUi', href : 'UxUi' },{value : 'Club', href : 'club' },{value : 'Contact' , href: '' }]
    const [active , setActive] = useState(false)

    return (
        <div id='header' onMouseLeave={() => setCourses(false)}>
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}>
                        <img src={Motion} alt=""/>
                    </NavLink>
                    <div className="header__block">
                        <NavLink to={'/'}>Главное</NavLink>
                        <NavLink to={"/about_us"}>O нас</NavLink>
                        <a onMouseOver={() => setCourses(true)}> {courses ? <Courses/> : ''}O курсах</a>
                        <NavLink to={"/it_club"}>Клуб</NavLink>
                        <NavLink to={"contact"}>Контакты</NavLink>
                    </div>
                    <div className="header__language">
                        <img src={language} alt=""/>
                        <span>КР/РУС/ENG</span>
                    </div>
                    {/*<nav className="burger_navbar">*/}
                    {/*    <div*/}
                    {/*        onClick={()=> setActive(!active)}*/}
                    {/*        className="burger-btn">*/}
                    {/*        <span/>*/}
                    {/*    </div>*/}
                    {/*</nav>*/}
                </div>
            </div>
            {/*<div className="menu--navbar"> <Menu items={items} active={active} setActive={setActive}/></div>*/}
        </div>
    );
};

export default Header;