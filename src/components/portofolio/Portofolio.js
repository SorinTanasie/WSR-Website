import React from "react";
import "./portofolio.scss";
import { ReactComponent as Shape } from "../../Assets/BgShape3.svg";
import ImageTable from '../image-table/image-table.component'
import Image1 from '../../Assets/portofoliu/abc-final.jpg';
import Image2 from '../../Assets/portofoliu/Bm1final.png';
import Image3 from '../../Assets/portofoliu/caprioaralogo.jpg';
import Image4 from '../../Assets/portofoliu/Logo.jpg';
import Image5 from '../../Assets/portofoliu/pixelsmecherfinal.jpg';
import Image6 from '../../Assets/portofoliu/x-shoes.jpg';


const Portofolio = () => (
  <div className="portofolio-container">
    <Shape className="shape" />

    <div className="portofolio-text">
      <h2>See some of our work</h2>
    </div>

    <ImageTable
    imgSrc1={Image1}
    imgSrc2={Image2}
    imgSrc3={Image3}
    imgSrc4={Image4}
    imgSrc5={Image5}
    imgSrc6={Image6}
    />
    

    <span>See more</span>
  </div>
);

export default Portofolio;
