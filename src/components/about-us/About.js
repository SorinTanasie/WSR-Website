import React from 'react';
import {ReactComponent as Shape} from '../../Assets/BgShape2.svg';
import AboutImg from './AboutImg';
import AboutText from './AboutText';

const About = ({logo}) => (
    <div className="about">
        <Shape className="shape"/>
        
        <AboutImg logo={logo} />


        <AboutText
            smallText="Some small text"
            title="Some Words About Us"
            firstP="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed scelerisque arcu, tristique ultrices justo."
            secondP="Fusce id mauris vel nibh malesuada elementum. Phasellus ut diam efficitur augue pulvinar hendrerit ac ac lorem. Vestibulum et venenatis nisl. Maecenas ac maximus tellus, ut bibendum nisi."
        
        />



    </div>
)

export default About;