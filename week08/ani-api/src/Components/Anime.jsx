import React from 'react';

const Anime = props => {

  return (
    <div className="card">
      <div className="card-header bg-primary text-light">{props.anime.title}</div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <img src={props.anime.image_url} alt="img" style={{width: "100%"}} />
          </div>
          <div className="col-sm-9">
            <h4>Score: {props.anime.score}</h4>
            <p>{props.anime.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Anime;