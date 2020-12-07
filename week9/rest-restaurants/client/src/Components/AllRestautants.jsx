import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const AllRestautants = props => {

  const [all, setAll] = useState([]);
  
  useEffect( () => {
    getAll();
  }, []);

  function getAll() {
    axios.get("http://localhost:8000/restaurants")
      .then(res => {
        console.log(res);
        setAll(res.data);
      }).catch(err => console.error(err));
  }

  const remove = _id => {
    axios.delete(`http://localhost:8000/restaurants/${_id}`)
      .then(res => {
        console.log(res);
        getAll();
      }).catch(err => console.error(err));
  }

  return (
    <div className="row my-3">
      {all.map( rest => 
        <div className="col-sm-6" key={rest._id}>
          <div className="card my-5">
            <div className="card-header bg-dark text-light">{rest.name}</div>
            <div className="card-body">
              <p>Cuisine: {rest.cuisine}</p>
              <p>Year Established: {rest.yearEstablished}</p>
              <p>Description: {rest.description}</p>
              <div className="d-flex justify-content-between">
                <Link to={`/view/${rest._id}`} className="btn btn-outline-success">View</Link>
                <Link to={`/edit/${rest._id}`} className="btn btn-outline-info">Edit</Link>
                <button className="btn btn-outline-danger" onClick={e => remove(rest._id)}>Remove</button>
              </div>
            </div>
          </div>
        </div>  
      )}
    </div>
  )
}

export default AllRestautants
