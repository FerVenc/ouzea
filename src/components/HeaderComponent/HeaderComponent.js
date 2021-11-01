import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { HeaderButton } from '../Buttons/HeaderButton';

export const HeaderComponent = () => {

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            delay: 100,
        });
    }, [])

    return (
        <>
            <img
                src="./assets/BackgroundLogo.png"
                alt=""
                className="background-logo"             
            />

            <img
                src="./assets/Bottle.png"
                alt=""
                className="bottle"
                data-aos="fade-right"
            />

            <img
                src="./assets/Leaf.png"
                alt=""
                className="leaf"
            />

            <div className="header-logo-box">
                <img
                    src="./assets/Logo.png"
                    alt=""
                    className="logo"
                    data-aos="fade-right"
                />

                <hr />

                <h4> Natural Cosmetics </h4>

                <Link
                    to="section01-container"
                    smooth={true}
                    duration={1000}
                >
                    <HeaderButton />
                </Link>

            </div>
        </>
    )
}
