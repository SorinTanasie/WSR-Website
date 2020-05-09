import React from "react";
import "./portofolio.styles.scss";
import Intro from '../../components/intro/Intro';
import image from "../../Assets/man-meditating.png";
import Image2 from "../../Assets/BgShape.png";

class Portofolio extends React.Component {
  state = { show: false }
  showFirst = () => {
    this.setState({ show: true });
  }
  
  showSecound = () => {
    this.setState({ show: false });
  }
render(){
  return(
  <div className="portofolio-page">
    <Intro
      hText="The Spirit of Digital Agency."
      pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elit vel enim egestas dignissim ac a nunc."
      image={image}
      shape={Image2}
    />

    <div className="switch">
        <h1 class="clienti switch-active" onClick={this.showFirst}>Clienti</h1>
        <h1 class="furnizori" onClick={this.showSecound}>Furnizori</h1>
    </div>
    <div className="sectiunea1">

    </div>
    <div className="sectiunea2">

    </div>
  </div>
  )
}
};

export default Portofolio;
