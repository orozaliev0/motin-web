import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Hero from "../main-page/Hero/Hero";
import Last from "../main-page/Last/Last";


const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {/*<Hero/>*/}
            <div>{children}</div>
            {/*<Last/>*/}
            <Footer/>
        </div>
    );
};

export default Layout;