import React from 'react';
import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { SocialMediaIcons } from '../../components/SocialMediaIcons/SocialMediaIcons';


export const HeaderScreen = () => {
    return (
        <div className="header-container">
        <HeaderComponent/>
        <SocialMediaIcons/>
        </div>
    )
}
