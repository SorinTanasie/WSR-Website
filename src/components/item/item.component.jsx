import React from 'react';
import './item.style.scss';


const Item = ({imgSrc,hText,pText}) =>(
    
    <div className="item-container">
        <img src={imgSrc} className="image" alt="Image"/>
        <h3>{hText}</h3>
        <p>{pText}</p>
    </div>
)

export default Item;