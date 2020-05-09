import React from 'react';
import './nav-bar.styles.scss';
import Modal from "../modal/modal.component";
import Form from"../form/form.component";


import { Link } from 'react-router-dom';
import PortofolioPage from '../router-pages/portofolio-page';
import AboutUs from '../router-pages/about-us';



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
          <li>
            <Link to="/">Acasa</Link>
          </li>

          <li>
            <Link to="/despre-noi">Despre noi</Link>
          </li>

          <li>
            <Link to="/portofoliu">Portofoliu</Link>
          </li>

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