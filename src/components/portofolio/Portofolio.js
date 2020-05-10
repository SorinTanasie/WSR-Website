import React from "react";
import "./portofolio.scss";
import { ReactComponent as Shape } from "../../Assets/BgShape3.svg";
import ImageTable from '../image-table/image-table.component'
import Logo from '../../Assets/Logo.jpg';

const Portofolio = () => (
  <div className="portofolio-container">
    <Shape className="shape" />

    <div className="portofolio-text">
      <h2>See some of our work</h2>
    </div>

    <ImageTable
    imgSrc={Logo}/>
    

    <span>See more</span>
  </div>
);

export default Portofolio;
