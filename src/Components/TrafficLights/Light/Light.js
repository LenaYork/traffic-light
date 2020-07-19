import React from 'react';
import './Light.css';

export function Light(props) {
    const { color, isActive } = props;
    return(
        <div
            className={`light${isActive ? color : ''}`}
        />
    )
}
