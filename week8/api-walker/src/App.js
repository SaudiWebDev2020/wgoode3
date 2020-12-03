import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Search from './Components/Search';
import People from './Components/People';
import Planets from './Components/Planets';


function App() {
  return (
    <div className="container">
      <h1>API-walker</h1>
      <Search />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
