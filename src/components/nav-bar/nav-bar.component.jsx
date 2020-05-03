import React from 'react';
import './nav-bar.styles.scss';


const Nav = () =>{

    const click = () =>{
        const body = document.querySelector('body')
        body.classList.toggle('open')
    }

    return(
    <nav className="nav">
        <div className="menu">
        <input type="checkbox" />
        <label className="checkbtn" onClick={click} >
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
        <div className="contact-container">
        <a className="contact" href="#">Contacteaza-ne! <i class="fas fa-long-arrow-alt-right"></i></a>
        </div>
    </nav>
    )
};

export default Nav;