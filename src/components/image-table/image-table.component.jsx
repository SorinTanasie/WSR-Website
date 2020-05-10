import React from 'react';
import './image-table.styles.scss';

const ImageTable = ({imgSrc}) =>(
    <div className="portofolio-images">
      <div className="portofolio-row">
        <img src={imgSrc} alt="Portofolio-image" />
        <img src={imgSrc} alt="Portofolio-image" />
        <img src={imgSrc} alt="Portofolio-image"  />
      </div>

      <div className="portofolio-row">
        <img src={imgSrc} alt="Portofolio-image"  />
        <img src={imgSrc} alt="Portofolio-image"  />
        <img src={imgSrc} alt="Portofolio-image" />
      </div>
    </div>
);
export default ImageTable;