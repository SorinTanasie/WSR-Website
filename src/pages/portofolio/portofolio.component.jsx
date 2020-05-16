import React from "react";
import "./portofolio.styles.scss";
import Intro from "../../components/intro/Intro";
import image from "../../Assets/man-meditating.png";
import Image2 from "../../Assets/BgShape.png";
import Switch from "../../components/switch/switch.component";
import ScrollImage from '../../components/scroll-image/scroll-image.component';

import ImageTable from '../../components/image-table/image-table.component'
import Logo from '../../Assets/Logo.jpg';

import Website from '../../Assets/Website2.png'
import AgroWebsite from '../../Assets/Agro-Auto.jpg'
import Website2 from '../../Assets/Website3.png';

import Image1 from '../../Assets/portofoliu/abc-final.jpg';
import Image7 from '../../Assets/portofoliu/Bm1final.png';
import Image3 from '../../Assets/portofoliu/caprioaralogo.jpg';
import Image4 from '../../Assets/portofoliu/Logo.jpg';
import Image5 from '../../Assets/portofoliu/pixelsmecherfinal.jpg';
import Image6 from '../../Assets/portofoliu/x-shoes.jpg';


class Portofolio extends React.Component {
  state = { show: true };
  showFirst = () => {
    this.setState({ show: true });
  };

  showSecound = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="portofolio-page">
        <Intro
          hText="The Spirit of Digital Agency."
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elit vel enim egestas dignissim ac a nunc."
          image={image}
          shape={Image2}
        />

        <Switch
          showFirst={this.showFirst}
          showSecound={this.showSecound}
          show={this.state.show}
          content1={<div className="design"><ImageTable
          imgSrc1={Image1}
          imgSrc2={Image7}
          imgSrc3={Image3}
          imgSrc4={Image4}
          imgSrc5={Image5}
          imgSrc6={Image6}
          /></div>}
          content2={<div className="web-container">
          <ScrollImage 
          link=""
          name="site"
          image={AgroWebsite}/>
          <ScrollImage 
          link=""
          name="site"
          image={Website}/>
          <ScrollImage 
          link=""
          name="site"
          image={Website2}/>
          </div>}
        />
        
      </div>
    );
  }
}

export default Portofolio;
