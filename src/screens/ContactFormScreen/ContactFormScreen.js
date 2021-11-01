import React from 'react'
import { ContactFormComponent } from '../../components/ContactFormComponent/ContactFormComponent'
import { ContactFormImages } from '../../components/ContactFormComponent/ContactFormImages'

export const ContactFormScreen = () => {
    return (
        <div className="contact-form-container">
            <ContactFormImages/>
            <ContactFormComponent />
        </div>
    )
}
