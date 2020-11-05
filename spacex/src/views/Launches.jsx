import React, { useState } from 'react';

const Launches = props => {
    //we want to get data and then display it. Since the data from the API starts out initially as a JSON file, it will take time for this component to link to the JSON file= it's not instant. SO when the component first loads, we do NOT have any data. To keep track of the data going from no data to some data, we will use state and null. 

    //initilly we set state to null (we will have no launched), and then after the api loads, the state will update (will have some launches)
    const [launches, setLaunches] = useState(null);

    //if the launches are empty, let's return a loading gif
    if(launches === null){
        return <img src="https://creativepool.com/files/candidate/portfolio/full/1054066.gif" alt="Loading"/>
    }

    return (
        <div>Launches View</div>
    );
}

export default Launches;