import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search'; 
import Anime from './Components/Anime';
import React, { useState } from 'react';


function App() {

  const [result, setResult] = useState({});

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>AniApi</h1>
      </div>
      <Search onSearch={anime => setResult(anime)} />
      <div className="row">
        <div className="col-sm-8">
          <h3>Result</h3>
          {/* { JSON.stringify(result) } */}
          <Anime anime={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
