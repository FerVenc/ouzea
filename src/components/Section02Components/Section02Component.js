import React from 'react'
import { Link } from 'react-scroll'
import { Section02Button } from '../Buttons/Section02Button'

export const Section02Component = () => {
    return (
        <div className="section02-component">

            <h3>know our products</h3>

            <hr />

            <p> There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour,
                or randomised words which don't look even slightly believable.
            </p>

            <Link
                to="contact-form-container"
                smooth={true}
                duration={1000}
            >
                <Section02Button />
            </Link>

        </div>
    )
}
