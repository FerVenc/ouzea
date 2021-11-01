import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const ContactFormImages = () => {

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
                src="./assets/shadow-leaf.png"
                alt=""
                className="shadow-leaf"
            />

            <img
                src="./assets/contact-logo.png"
                alt=""
                className="logo contact-logo"
            />

        </>

    )
}
