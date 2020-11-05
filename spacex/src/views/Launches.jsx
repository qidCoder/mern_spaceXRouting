import React, { useState, useEffect } from 'react';
import axios from 'axios';//in order call the api
import {Link} from '@reach/router';//in order to use links

const Launches = props => {
    //we want to get data and then display it. Since the data from the API starts out initially as a JSON file, it will take time for this component to link to the JSON file= it's not instant. SO when the component first loads, we do NOT have any data. To keep track of the data going from no data to some data, we will use state and null. 

    //initilly we set state to null (we will have no launched), and then after the api loads, the state will update (will have some launches)
    const [launches, setLaunches] = useState(null);

    //we want to get the data immediately on page load so we need to use useEffect - useEffect will run immediately on loading of the component
    useEffect( () => {
        //we need to request the data - need Axios to make the API call. We are making a GET request
        axios.get("https://api.spacexdata.com/v3/launches")
        //since we don't know how long it is going to take, it's asynchronous and axios will return a promise. The promise says "we will let you know if the data comes back or we will let you know if it takes too long for the data to come back". It's a 'promise' that they will get back to us. We don't need the keyword 'Promise' because it is returned from the axios.get() function and then we can jst directly apply the .then and .catch to it
            //with asynchronous, you can't just read the code from the top down. It happens out of order
            //if we don't know how long something will take, we will send a callBack function so that we will get notified by the function being executed. .then is a callback function that will give us back a response
            .then( (res) => {
                console.log(res); 

                //now that we have the data, we can use it
                //first we have to set it
                //the data came back in the response (res) into an array of objects named data
                setLaunches(res.data)
                //now the state is no longer null and the div will be returned instead of the gif image
                //we will map it out below in return
            })
            .catch( (err) => { console.log(err); })//errors would be if it couldn't get to the server or if it took too long


    }, []);//empty array as second argument so it only loads once

    //if the launches are empty, let's return a loading gif
    if(launches === null){
        return <img src="https://creativepool.com/files/candidate/portfolio/full/1054066.gif" alt="Loading"/>
    }

    return (
        //we now have the data in an array and now will map them onto the page
        <div>
            {
                launches.map( (one_launch) => {
                    return (
                        <div key={one_launch.flight_number}>
                            {/* we now want to make this a link we can click on and take us to the specific launch */}
                            <Link to={'/launches/' + one_launch.flight_number}>

                            {/* OR you can also do it like this with backticks */}
                            {/* <Link to={`/launches/${one_launch.flight_number}`}></Link> */}

                                <h1>Launch number {one_launch.flight_number}</h1>
                            </Link>
                            
                            <h2>Mission Name: {one_launch.mission_name}</h2>
                            <p>Rocket: {one_launch.rocket.rocket_name}</p>
                            <hr/>
                        </div>
                    )})
            }
        </div>
    );
}

export default Launches;