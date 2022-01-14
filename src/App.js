import React, {useEffect} from 'react';

const App = () => {
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                console.log(value);
            });
    },[])
    return (
        <div>

        </div>
    );
};

export default App;
