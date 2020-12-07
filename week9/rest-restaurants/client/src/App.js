import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import AllRestaurants from './Components/AllRestautants';
import NewRestaurant from './Components/NewRestaurant';


function App() {
  return (
    <div className="container">
      <h1><span className="text-info">REST</span>aurants</h1>
      <Link to="/" className="btn btn-outline-primary">View All</Link> 
      <Link to="/new" className="btn btn-outline-primary">Add Restauraunt</Link> 
      <Router>
        <AllRestaurants path="/" />
        <NewRestaurant path="/new" />
      </Router>
    </div>
  );
}

export default App;
