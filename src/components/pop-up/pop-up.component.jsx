import React from 'react';
import './pop-up.styles.scss';

const PopUp = () =>{

    setTimeout(()=>{
       return(<div>asdasdasdasdasd</div>);
    },5000)
    
        return(
            <div className={`pop-up`}>
                <p>Your email was sent</p>
            </div>
        )

    
}

export default PopUp;