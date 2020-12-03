import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Planets = props => {
  
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${props.id}`)
      .then(res => {
        console.log(res);
        setPlanet(res.data);
      }).catch(err => {
        if(err.response && err.response.status === 404) {
          // let the user know these are not the droids they're looking for...
        } else {
          console.error(err);
        } 
      });
  }, [props]);

  return (
    <div className="row my-5">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            Planets Component <br/> {JSON.stringify(planet)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planets