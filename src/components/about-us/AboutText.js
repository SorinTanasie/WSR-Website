import React from 'react';
import './About.scss';
import {ReactComponent as Shape} from '../../Assets/BgShape2.svg';


const About = ({smallText, title, firstP, secondP, thirdP}) => (
   
        <div className="about-text">
            <span>{smallText}</span>

            <h1>{title}</h1>

            <p>{firstP}</p>
            <p>{secondP}</p>
            <p>{thirdP}</p>
        </div>

)

export default About;