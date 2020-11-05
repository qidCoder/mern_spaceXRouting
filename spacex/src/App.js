import logo from './logo.svg';
import './App.css';

//import routing
import {Router, Link, Redirect} from '@reach/router';

//import components
import Homepage from './views/Homepage';
import SingleLaunch from './views/SingleLaunch';
import Launches from './views/Launches';

function App() {
  return (
    <div className="App">
      {/* links to the components */}
      <Link to='/'>Homepage</Link> |
      <Link to='/launches'>Click for ALL launches</Link>
      <hr/> 


    
      <Router>
        <Homepage path='/' />
        <SingleLaunch path='/launches/:id' />
        <Launches path='/launches' />
      </Router>

    </div>
  );
}

export default App;


//notes
//main spaceX api site https://docs.spacexdata.com/
//will create a view showing one launch
//create another view showing all
