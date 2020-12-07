import React from 'react';


const History = props => {

  return (
    <ul className="list-group">
      {props.history.map((anime, i) => 
        <li className="list-group-item" onClick={e => props.onSearch(anime)} key={i}>{anime.title}</li>  
      )}
      {props.history.length > 0 ?
        <li className="list-group-item" onClick={props.reset}>Clear History</li> : ""}
    </ul>
  )

}

export default History;