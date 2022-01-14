import React, {useEffect, useState} from 'react';

import Rocket from "../rocket/Rocket";

const Rockets = () => {

    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => {
                setRockets(flights.filter(flight => flight.launch_year !== '2020'));
            });
    }, [])

    return (
        <div>
            {
                rockets.map(value => <Rocket key={value.flight_number}
                                             name={value.mission_name}
                                             year={value.launch_year}
                                             foto={<img src={value.links.mission_patch} alt={value.mission_name}/>}/>)
            }
        </div>
    );
};

export default Rockets;