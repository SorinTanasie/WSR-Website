import React from 'react';
import './About.scss';
import image from '../../Assets/Illustration.png';


const About = () => (
    <div className="about">
        <div className="about-image">
            <img src={image} className="ab-img" />
        </div>

        <div className="about-text">
            <span>Some small text</span>

            <h1>Some Words About Us</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed scelerisque arcu, tristique ultrices justo.</p>
            <p>Fusce id mauris vel nibh malesuada elementum. Phasellus ut diam efficitur augue pulvinar hendrerit ac ac lorem. Vestibulum et venenatis nisl. Maecenas ac maximus tellus, ut bibendum nisi.</p>
        </div>

    </div>
)

export default About;