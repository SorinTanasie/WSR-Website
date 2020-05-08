import React from "react";
import "./services.styles.scss";
import Item from "../item/item.component";
import Dev from "../../Assets/Dev-Icon.png";
import Design from "../../Assets/Design-Icon.png";
import Button from "../button/button.component";
import {ReactComponent as Shape} from '../../Assets/BgShape.svg';

const Services = () => (
  <div className="services-container">
    <Shape className="shape"/>
    
    <div class="action">
        <h2>Anything you need,we’ve got you covered</h2>
        <Button>Get in Touch</Button>
    </div>
    <div className="items">
    <Item
      imgSrc={Design}
      hText="Web & Graphic Design"
      pText="lasdasdasfagvsavsfjaggsldfkma;skdmasdasdasdasdasd"
    />
    <Item
      imgSrc={Dev}
      hText="Web & App Development"
      pText="lasdasdasfagvsavsfjaggsldfkma;skdmasdasdasdasdasd"
    />
    </div>
  </div>
);

export default Services;
