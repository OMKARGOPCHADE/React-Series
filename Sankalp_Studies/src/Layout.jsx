import React from 'react';
import {Outlet} from 'react-router'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx';

function Layout() {
    return ( 
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>

     );
}

export default Layout;
