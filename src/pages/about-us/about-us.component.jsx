import React from 'react';
import './about-us.styles.scss';
import AboutImg from '../../components/about-us/AboutImg';
import AboutText from '../../components/about-us/AboutText';
import ContactForm from '../../components/form/form.component';
import logo from '../../Assets/team1.png';

const AboutUs = () => {
    return (
        <div className="aboutus-page">
            <div className="about">
                <AboutText 
                    smallText="some text here"
                    title="this is the title"
                    firstP="a paragraph, a paragraph, a paragraph, a paragraph, a paragraph, a paragraph"
                    secondP="two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs, two paragraphs"
                    thirdP="or more, or more, or more, or more, or more, or more, or more, or more, or more, or more, or more, or more, or more"
                />
                <AboutImg logo={logo} />

            </div>



                <ContactForm />
        </div>

    )
}

export default AboutUs;