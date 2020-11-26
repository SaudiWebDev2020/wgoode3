import 'bootstrap/dist/css/bootstrap.min.css';
import HeroForm from './Components/HeroForm';
import HeroCard from './Components/HeroCard';
import React, { useState, useEffect } from 'react';


function App() {

  const [heroes, setHeroes] = useState([]);

  // function that runs as soon as the component loads!
  useEffect( () => {
    console.log("the page has loaded");
    console.log(localStorage.getItem("name"));
  }, []);

  const createHero = newHero => {
    setHeroes([...heroes, newHero]);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Hero App</h1>
      </div>
      <div className="row">
        <div className="col">
          <HeroForm setHero={createHero} />
        </div>
        <div className="col">
          {
            heroes.map((hero, i) =>
              <HeroCard key={i} hero={hero} /> 
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
