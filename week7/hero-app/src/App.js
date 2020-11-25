import 'bootstrap/dist/css/bootstrap.min.css';
import HeroForm from './Components/HeroForm';
import HeroCard from './Components/HeroCard';
import React, { useState } from 'react';


function App() {

  const [hero, setHero] = useState({skills: []});

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Hero App</h1>
      </div>
      <div className="row">
        <div className="col">
          <HeroForm setHero={setHero} />
        </div>
        <div className="col">
          <HeroCard hero={hero} />
        </div>
      </div>
    </div>
  );
}

export default App;
