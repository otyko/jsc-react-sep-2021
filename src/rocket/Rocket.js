import React from 'react';

import './Rocket.css'

const Rocket = ({name, year, foto}) => {
    return (
        <div>
            {name}--{year}{foto}
        </div>
    );
};

export default Rocket;