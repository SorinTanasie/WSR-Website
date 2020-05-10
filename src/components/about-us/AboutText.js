import React from 'react';
import './About.scss';
import {ReactComponent as Shape} from '../../Assets/BgShape2.svg';


const About = ({smallText, title, firstP, secondP, thirdP}) => (
   
        <div className="about-text">
            <span>{smallText}</span>

            <h2>{title}</h2>

            <p>{firstP}</p>
            <p>{secondP}</p>
            <p>{thirdP}</p>
        </div>

)

export default About;