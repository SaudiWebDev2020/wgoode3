import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [cars, setCars] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2000);
  const [color, setColor] = useState("");

  useEffect(() => {
    // when the user loads the component run this code!
    fetchCars();
  }, []);

  function fetchCars() {
    axios.get("http://localhost:8000/cars")
      .then(res => {
        console.log(res);
        setCars(res.data.cars);
        setColor("");
        setMake("");
        setModel("");
        setYear(2000);
      }).catch(err => console.error(err));
  }

  const addCar = e => {
    e.preventDefault();
    const carData = { make, model, year, color };
    axios.post("http://localhost:8000/cars", carData)
      .then(res => {
        console.log(res);
        fetchCars();
      }).catch(err => console.error(err));
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Cars API</h1>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-striped table-hover">
            <tbody>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
              </tr>
              {cars.map(car =>
                <tr key={car._id}>
                  <td>{car.make}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  <td>{car.color}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col">
          <form onSubmit={addCar}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Make</label>
                  <input type="text" className="form-control" onChange={e => setMake(e.target.value)} value={make} />
                </div>
                <div className="form-group">
                  <label>Model</label>
                  <input type="text" className="form-control" onChange={e => setModel(e.target.value)} value={model} />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Year</label>
                  <input type="number" className="form-control" onChange={e => setYear(e.target.value)} value={year} />
                </div>
                <div className="form-group">
                  <label>Color</label>
                  <input type="text" className="form-control" onChange={e => setColor(e.target.value)} value={color} />
                </div>
              </div>
            </div>
            <input type="submit" value="Add Car" className="btn btn-primary" />
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;
