import React from 'react';
import './news.scss';
import {ReactComponent as Shape} from '../../Assets/BgShape4.svg'


const News = () => (
    <div className="news-container">
        <Shape className="shape" />
        <div className="news-text">
            <span>News Section</span>
            <h1>Check our news</h1>
        </div>

        <div className="news-cards">
            <div className="card active">
                <div className="card-content">
                    <h4>New project</h4>
                    <p>Etiam vitae cursus lectus. Mauris facilisis, sem et aliquam tincidunt, tortor turpis ultricies nisi.</p>
                </div>
            </div>

            <div className="card ">
                <div className="card-content">
                    <h4>New Website</h4>
                    <p>Etiam vitae cursus lectus. Mauris facilisis, sem et aliquam tincidunt, tortor turpis ultricies nisi.</p>
                </div>
            </div>

            <div className="card ">
                <div className="card-content">
                    <h4>New New</h4>
                    <p>Etiam vitae cursus lectus. Mauris facilisis, sem et aliquam tincidunt, tortor turpis ultricies nisi.</p>
                </div>
            </div>
        </div>
    </div>
)

export default News;

