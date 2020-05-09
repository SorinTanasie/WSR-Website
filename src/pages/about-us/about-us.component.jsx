import React from 'react';
import './about-us.styles.scss';
import AboutImg from '../../components/about-us/AboutImg';
import AboutText from '../../components/about-us/AboutText';

import logo from '../../Assets/team1.png';

const AboutUs = () => {
    return (
        <div>
            <div className="about">
                <AboutImg logo={logo} />
                <AboutText 
                    smallText="some text here"
                    title="this is the title"
                    firstP="a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph"
                    secondP="two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs"
                    thirdP="or more, or more, or more, or more, or more, or more, or more, or more, or more, or more, or more, or more, or more"
                />
            </div>


        </div>

    )
}

export default AboutUs;