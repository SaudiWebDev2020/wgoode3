import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search'; 
import Anime from './Components/Anime';
import History from './Components/History';
import Confirm from './Components/Confirm';
import dedupe from './dedupe';
import './App.css';


const App = props => {

  const [result, setResult] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // on page load check for past saved results
    const cachedHistory = localStorage.getItem("history");
    if(cachedHistory) {
      try {
        setHistory(JSON.parse(cachedHistory));
      } catch(err) {
        console.error("history corrupted... \n", err);
        localStorage.removeItem("history");
      }
    }
  }, []);

  useEffect(() => {
    // when history is updated let's store it in localhost
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  const newSearch = anime => {
    setResult(anime);
    setHistory(dedupe([anime, ...history]));
  }

  const reset = e => {
    localStorage.removeItem("history");
    setResult({});
    setHistory([]);
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
          { result.title ? <Anime anime={result} /> : "" }
        </div>
        <div className="col-sm-4">
          <h4 className="my-3">Past Searches</h4>
          <History history={history} onSearch={newSearch} reset={reset} />
        </div>
      </div>
      {/* <Confirm /> */}
    </div>
  );
}

export default App;
