import React from 'react';
import './Intro.scss';
import image from '../../Assets/Illustration.png';
import Image2 from '../../Assets/BgShape.png';

const Intro = () => (

    <div className="intro-container">
        <div className="intro-text">
            <h1>The Spirit of Digital Agency.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elit vel enim egestas dignissim ac a nunc.</p>
            <div className="buttons">
            <button className="button">More about us</button>
            <button className="unstyled-button">Get in touch</button>
            </div>

        </div>
        
        <div className="intro-image">
            
            <img  src={Image2} className="shape2"/>
            <img className="shape" src={image} />
        </div>
    </div>
)

export default Intro;