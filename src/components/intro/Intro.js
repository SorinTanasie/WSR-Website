import React from 'react';
import './Intro.scss';
import image from '../../Assets/Illustration.png';

const Intro = () => (

    <div className="intro-container">
        <div className="intro-text">
            <h1>The Spirit of Digital Agency.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elit vel enim egestas dignissim ac a nunc.</p>

            <button className="button">More about us</button>
            <button className="unstyled-button">Get in touch</button>

        </div>

        <div className="intro-image">
            <img className="shape" src={image} />
        </div>
    </div>
)

export default Intro;