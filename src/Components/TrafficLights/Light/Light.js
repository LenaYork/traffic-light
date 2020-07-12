import React from 'react';
import './Light.css';

export function Light(props) {
    const { color, activeLight, handleClick } = props;

    return(
        <div
            className={`light ${color === activeLight ? color : ''}`}
            onClick={handleClick}
        />
    )
}
