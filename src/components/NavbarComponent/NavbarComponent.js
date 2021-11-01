import React from 'react';
import { FaBars, FaSistrix } from "react-icons/fa";
import { Link } from 'react-scroll';

export const NavbarComponent = () => {

    return (
        <>

            <div className="navbar-icon-box">
                <img
                    src="./assets/navbar-icon.png"
                    alt=""
                    className="navbar-icon"
                />
                <FaBars className="menu-icon" />
            </div>


            <ul className="navbar-list">

                <li>
                    <Link to='header-container'
                        smooth={true}
                        duration={1000}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to='section01-container'
                        smooth={true}
                        duration={1000}>
                        About
                    </Link>
                </li>

                <li>
                    <Link to='contact-form-container'
                        smooth={true}
                        duration={1000}>
                        Contact
                    </Link>
                </li>
                
            </ul>

            <div className="navbar-search-box">
                <input
                    type="text"
                />
                <FaSistrix className="search-icon" />
            </div>

        </>
    )
}