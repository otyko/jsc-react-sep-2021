import React from 'react';

import './Rocket.css'

const Rocket = ({name, year, foto}) => {
    return (
        <div className={'rocket'}>

            <div>{name}</div>
            <div>{year}</div>
            <div>{foto}</div>

        </div>
    );
};

export default Rocket;