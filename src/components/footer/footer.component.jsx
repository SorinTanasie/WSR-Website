import React from 'react';
import './footer.styles.scss'

const Footer = ()=>(
    <div className="footer">

        <span>WSR</span>
        <h3>Creativity Above</h3>
        <ul>
            <li>Acasa.</li>
            <li>Despre Noi.</li>
            <li>Portofoliu.</li>
        </ul>

        <p> © 2019 - WSR,All Right Reserved</p>
        <div className="icons">
            <a href="#" class="fab fa-facebook"></a>
            <a href="#" class="fab fa-instagram"></a>
        </div>

    </div>
)

export default Footer