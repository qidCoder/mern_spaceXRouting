import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleLaunch = props => {
    const[launch, setLaunch] = useState(null);

    //props will come with an id key that is passed in from the Router
    //<SingleLaunch path='/launches/:id" />
    //the actual id that is provided in the URL will be passed in to props
    useEffect( () => {
        axios.get("https://api.spacexdata.com/v3/launches/" + props.id)
        .then( (res) => setLaunch(res.data))
        .catch( (err) => console.log(err))
    }, [props.id])
    //added in props.id in the array so it will update the data if that variable changes

    if (launch === null){
        return <img src="https://creativepool.com/files/candidate/portfolio/full/1054066.gif" alt="Loading"/>
    }

    return (
        <div>
            <h1>Mission Name: {launch.mission_name}</h1>   
            <h2>Rocket: {launch.rocket.rocket_name}</h2> 

            {/* ships is an array in the data so we need to map it out */}
            <h3>Ships</h3>
            <ul>
            {
                launch.ships.map( (ship, i) => {
                    return (
                    <li key={i}>{ship}</li>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default SingleLaunch;