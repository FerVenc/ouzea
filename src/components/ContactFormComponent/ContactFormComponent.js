import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const ContactFormComponent = () => {

    useEffect(() => {
        Aos.init({
            duration: 500,
            easing: 'ease',
            delay: 100,
        });
    }, [])

    return (
        // Container
        <div className="form-container">

            <h1 data-aos="fade-right">Contact Us</h1>

            <div
                className="input-container">
                <input type="text" required
                    name="name"
                    autoFocus
                    autoComplete='off'
                />
                <label className='lbl-input'>
                    <span className='text-input'> Name </span>
                </label>
            </div>

            <div className="input-container">
                <input type="text" required
                    name="email"
                    autoComplete='off'
                />
                <label className='lbl-input'>
                    <span className='text-input'>Email</span>
                </label>
            </div>

            <div className="input-container">
                <input type="text" required
                    name="text"
                    autoComplete='off'
                />
                <label className='lbl-input'>
                    <span className='text-input'>Cellphone Number </span>
                </label>
            </div>

            <div className="input-container-textarea">
                <label>
                    <span>Comments</span>
                </label>
                <textarea
                    required
                    name="text"
                    autoComplete='off'
                />
            </div>


            {/* Button */}
            <div
                className="form-btn-container"
                data-aos="fade-right"
            >
                <button className="btn">
                    <span>
                        Send
                    </span>
                </button>
            </div>

        </div>
    );
};

