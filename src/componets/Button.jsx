import React from 'react';

import "./Button.css";


const Button = ({ children, onClick }) => {
    return (
        <button className="Btn" onclick={onClick} >
            {children}
        </button>
    );
}
 
export default Button;