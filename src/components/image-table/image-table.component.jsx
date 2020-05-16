import React from 'react';
import './image-table.styles.scss';

const ImageTable = ({imgSrc1,imgSrc2,imgSrc3,imgSrc4,imgSrc5,imgSrc6}) =>(
    <div className="portofolio-images">
      <div className="portofolio-row">
        <img src={imgSrc1} alt="Portofolio-image" />
        <img src={imgSrc2} alt="Portofolio-image" />
        <img src={imgSrc3} alt="Portofolio-image"  />
      </div>

      <div className="portofolio-row">
        <img src={imgSrc4} alt="Portofolio-image"  />
        <img src={imgSrc5} alt="Portofolio-image"  />
        <img src={imgSrc6} alt="Portofolio-image" />
      </div>
    </div>
);
export default ImageTable;