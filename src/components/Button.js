import React from 'react';
import './Button.scss';

const Button = ({ className, ...props }) => {
    return (
        <button {...props} className={["Button", className].join(" ")} />
    );
}

export default Button;