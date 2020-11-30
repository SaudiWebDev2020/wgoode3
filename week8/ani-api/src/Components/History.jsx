import React from 'react';


const History = props => {

  return (
    <ul className="list-group">
      {props.history.map(anime => 
        <li className="list-group-item" onClick={e => props.onSearch(anime)}>{anime.title}</li>  
      )}
    </ul>
  )

}

export default History;