import React from "react";
import './modal.styles.scss';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} >
      <section className="modal-main">
      <i className="fas fa-times" onClick={handleClose}></i>
        {children}
        
      </section>
    </div>
  );
};

export default Modal;
