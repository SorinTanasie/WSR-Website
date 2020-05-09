import React from "react";
import "./portofolio.styles.scss";
import Intro from '../../components/intro/Intro';
import image from "../../Assets/man-meditating.png";
import Image2 from "../../Assets/BgShape.png";
import Switch from "../../components/switch/switch.component"

class Portofolio extends React.Component {
  state = { show: true }
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

    
    
  <Switch showFirst={this.showFirst} showSecound={this.showSecound} show={this.state.show} content1={<p>content1</p>} content2={<p>content2</p>}/>
    
  </div>
  )
}
};

export default Portofolio;
