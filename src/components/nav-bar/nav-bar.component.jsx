import React from "react";
import "./nav-bar.styles.scss";
import Modal from "../modal/modal.component";
import Form from "../form/form.component";

import { Link } from "react-router-dom";

class Nav extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  click = () => {
    const body = document.querySelector("body");
    body.classList.toggle("open");
  };
  click2 = (e) => {
    const body = document.querySelector("body");
    const overlay = document.querySelector('nav')
    if (e.target === overlay && body.className === "open") {
      body.classList.remove("open");
    }
  };
  render() {
    return (
      <nav className="nav" onClick={this.click2}>
        <div className="menu">
          <input type="checkbox" />
          <label className="checkbtn" onClick={this.click}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </label>
          <a>Logo</a>
          <ul>
            <li>
              <Link to="/" onClick={this.click}>
                Acasa
              </Link>
            </li>

            <li>
              <Link to="/despre-noi" onClick={this.click}>
                Despre noi
              </Link>
            </li>

            <li>
              <Link to="/portofoliu" onClick={this.click}>
                Portofoliu
              </Link>
            </li>
          </ul>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <Form />
        </Modal>

        <div className="contact-container">
          <a className="contact" onClick={this.showModal}>
            Contacteaza-ne! <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
