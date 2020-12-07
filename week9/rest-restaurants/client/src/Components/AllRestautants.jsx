import React, {useEffect, useState} from 'react'
import axios from 'axios';

const AllRestautants = props => {

  const [all, setAll] = useState([]);
  
  useEffect( () => {
    axios.get("http://localhost:8000/restaurants")
      .then(res => {
        console.log(res);
        setAll(res.data);
      }).catch(err => console.error(err));
  }, []);

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
            </div>
          </div>
        </div>  
      )}
    </div>
  )
}

export default AllRestautants
