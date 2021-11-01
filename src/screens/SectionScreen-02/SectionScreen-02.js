import React from 'react'
import { Section02Component } from '../../components/Section02Components/Section02Component'

export const SectionScreen02 = () => {
    return (
        <div className="section02-container">

            <img
                src="./assets/Rocks.png"
                alt=""
                className="rocks"
            />

            <Section02Component/>
            
        </div>
    )
}
