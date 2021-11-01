import React from 'react';
import { Navbar } from './screens/Navbar/Navbar';
import { HeaderScreen } from './screens/HeaderScreen/HeaderScreen';
import { SectionScreen01 } from './screens/SectionScreen-01/SectionScreen-01';
import { SectionScreen02 } from './screens/SectionScreen-02/SectionScreen-02';
import { ContactFormScreen } from './screens/ContactFormScreen/ContactFormScreen';
import { FooterScreen } from './screens/FooterScreen/FooterScreen';

export const App = () => {
    return (
        <div className="wrapper">
            <Navbar/>
            <HeaderScreen/>
            <SectionScreen01/>
            <SectionScreen02/>
            <ContactFormScreen/>
            <FooterScreen/>
        </div>
    )
}
