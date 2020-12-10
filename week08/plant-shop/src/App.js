import 'bootstrap/dist/css/bootstrap.min.css';
import PlantForm from './Components/PlantForm';
import Plant from './Components/Plant';
import React, { useState } from 'react';
import EditPlant from './Components/EditPlant';

function App() {

  const [plants, setPlants] = useState([]);
  const [id, setId] = useState(-1);
  const [onePlant, setOnePlant] = useState(null);

  const buy = index => {
    console.log("this is the plant to buy", index, plants[index]);
    // the splice way
    // let temp = [...plants];
    // temp.splice(index, 1);
    // setPlants(temp);

    // the slice way
    setPlants( plants.slice(0, index).concat(plants.slice(index+1, plants.length)) );
  }

  const toUpdate = index => {
    console.log("this is the plant we want to update", index, plants[index]);
    setId(index);
    setOnePlant(plants[index]);
  }

  const update = updatedPlant => {
    let temp = [...plants];
    temp[id] = updatedPlant;
    setPlants(temp);
    setId(-1);
    setOnePlant(null);
  }

  const cancel = e => {
    setId(-1);
    setOnePlant(null);
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
              <Plant key={i} _id={i} plant={plant} buy={buy} toUpdate={toUpdate} />
            )
          }
        </div>
      </div>
      <div className="row mt-5">
          <div className="col-sm-8 offset-sm-2">
            {
              onePlant ?
              <EditPlant update={update} toEdit={onePlant} cancel={cancel} /> :
              ''
            }
          </div>
      </div>
    </div>
  );
}

export default App;
