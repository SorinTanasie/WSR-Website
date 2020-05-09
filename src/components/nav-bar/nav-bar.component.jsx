import React from 'react';
import './nav-bar.styles.scss';
import Modal from "../modal/modal.component";
import Form from"../form/form.component";


class Nav extends React.Component{
  state = { show: false }
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }

    click = () =>{
        const body = document.querySelector('body')
        body.classList.toggle('open')
    }
    render(){
    return(
    <nav className="nav">
        <div className="menu">
        <input type="checkbox" />
        <label className="checkbtn" onClick={this.click} >
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </label>
        <a href="#">
            Logo
        </a>
        
        <ul>
          <li><a className="active" href="#">Acasa</a></li>
          <li><a href="#">Despre Noi</a></li>
          <li><a href="#">Portofoliu</a></li>
        </ul>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <Form/>
        </Modal>
        <div className="contact-container">
        <a className="contact" onClick={this.showModal}>Contacteaza-ne! <i className="fas fa-long-arrow-alt-right"></i></a>
        </div>
    </nav>
    )
  }
};

export default Nav;