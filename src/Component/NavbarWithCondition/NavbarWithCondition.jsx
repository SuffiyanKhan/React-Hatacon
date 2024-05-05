import React, { memo } from 'react'
import { useLocation } from 'react-router-dom';
import AppNavbar from '../Navbar/Navbar';



function NavbarWithCondition() {
    const location = useLocation();

    const isLoginPage = location.pathname === '/';

    return (
        <>
            {isLoginPage ? <AppNavbar /> : ""}
        </>
    );
}

export default memo(NavbarWithCondition)