import React from 'react'
import { Section01Component } from '../../components/Section01Components/Section01Component'

export const SectionScreen01 = () => {
    return (
        <div className="section01-container">

            <img
                src="./assets/coconut.png"
                alt=""
                className="coconut"
            />

            <Section01Component/>
            
        </div>
    )
}
