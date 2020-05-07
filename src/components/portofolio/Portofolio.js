import React from 'react';
import './portofolio.scss';


const Portofolio = () => (

    <div className="portofolio-container">
        <div className="portofolio-text">
            <h1>See some of our work</h1>

        </div>

        <div className="portofolio-images">
            <div className="portofolio-row">
                <img src="https://picsum.photos/200/200"/>
                <img src="https://picsum.photos/200/200"/>
                <img src="https://picsum.photos/200/200"/>

            </div>

            <div className="portofolio-row">
                <img src="https://picsum.photos/200/200"/>
                <img src="https://picsum.photos/200/200"/>
                <img src="https://picsum.photos/200/200"/>

            </div>

        </div>

        <span>See more</span>
    </div>

)

export default Portofolio;