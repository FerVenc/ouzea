import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Section01Component = () => {

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease',
            delay: 100,
        });
    }, [])

    return (
        <div className="section01-component-container">

            <div className="section01-textbox">
                <h3 data-aos="fade-up"> Who we are? </h3>

                <p data-aos="fade-up">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic <br /> <br />
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div className="section01-imagebox">
                <img
                    src="./assets/can.png"
                    alt=""
                    className="can"
                    data-aos="fade-left"
                />
            </div>


        </div>
    )
}
