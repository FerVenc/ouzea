import React, { useState } from 'react';
import { NavbarComponent } from '../../components/NavbarComponent/NavbarComponent';

export const Navbar = () => {

    // Menu Background - Scroll Color Change:
    const [navMenu, setNavMenu] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavMenu(true);
        } else {
            setNavMenu(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navMenu ? 'navbar-container-active' : 'navbar-container'}>
         <NavbarComponent/>
        </nav>
    )
}
