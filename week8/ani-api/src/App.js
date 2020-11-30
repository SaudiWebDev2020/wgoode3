import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search'; 
import Anime from './Components/Anime';
import History from './Components/History';
import './App.css';


function dedupe(arr) {
  const newArr = [];
  for(let item of arr) {
    console.log(item);
    // we can use the `id` to compare the objects
    let exists = false;
    for(let thing of newArr) {
      if(thing.mal_id === item.mal_id) {
        exists = true;
        break
      }
    }
    if(!exists) {
      newArr.push(item);
    }
  }
  return newArr;
}


const App = props => {

  const [result, setResult] = useState({});
  const [history, setHistory] = useState([]);

  const newSearch = anime => {
    setResult(anime);
    setHistory(dedupe([anime, ...history]));
  }

  return (
    <div className="container">
      <div className="jumbotron bg-primary text-light">
        <h1>AniApi</h1>
      </div>
      <Search onSearch={newSearch} />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="my-3">Showing results...</h4>
          {/* { JSON.stringify(result) } */}
          { result.title ? <Anime anime={result} /> : "" }
        </div>
        <div className="col-sm-4">
          <h4 className="my-3">Past Searches</h4>
          <History history={history} onSearch={newSearch} />
        </div>
      </div>
    </div>
  );
}

export default App;
