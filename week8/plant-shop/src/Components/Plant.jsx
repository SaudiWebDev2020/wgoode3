import React from 'react';

const Plant = props => {

  return (
    <div className="media my-3 p-3 border border-secondary">
      <img className="mr-3" src={props.plant.image} alt={props.plant.name} height="128px"/>
      <div className="media-body">
        <h5 className="mt-0">{props.plant.name}</h5>
        <p>${props.plant.price}</p>
        <button className="btn btn-warning" onClick={e => props.buy(props._id)}>Buy!</button>
      </div>
    </div>
  );
}

export default Plant;