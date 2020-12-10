import React, { useState, useEffect } from 'react'
import axios from 'axios';

const People = props => {

  const [person, setPerson] = useState({});
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    setIsErr(false);
    axios.get(`https://swapi.dev/api/people/${props.id}`)
      .then(res => {
        console.log(res);
        setPerson(res.data);
      }).catch(err => {
        if(err.response && err.response.status === 404) {
          // let the user know these are not the droids they're looking for...
          setIsErr(true);
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
          {
            !isErr ? 
              <>
                <h3>{person.name}</h3>
                <p>Height: {person.height}<br/>
                Mass: {person.mass}<br/>
                Hair color: {person.hair_color}<br/>
                Skin color: {person.skin_color}<br/>
                <a href={"" + person.homeworld}>homeworld</a></p>
              </>:
              <p>These are not the droids you're looking for!</p>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default People
