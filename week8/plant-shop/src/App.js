import 'bootstrap/dist/css/bootstrap.min.css';
import PlantForm from './Components/PlantForm';
import Plant from './Components/Plant';
import React, { useState } from 'react';

function App() {

  const [plants, setPlants] = useState([]);

  const buy = index => {
    console.log("this is the plant to buy", index, plants[index]);
    // the splice way
    // let temp = [...plants];
    // temp.splice(index, 1);
    // setPlants(temp);

    // the slice way
    setPlants( plants.slice(0, index).concat(plants.slice(index+1, plants.length)) );
  }

  return (
    <div className="container">
      <div className="jumbotron bg-success text-light"><h1>Plant Shop</h1></div>
      <div className="row">
        <div className="col-sm-4">
          <PlantForm addPlant={plant => setPlants([plant, ...plants])} />
        </div>
        <div className="col-sm-8">
          {
            plants.map( (plant, i) => 
              <Plant key={i} _id={i} plant={plant} buy={buy} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
