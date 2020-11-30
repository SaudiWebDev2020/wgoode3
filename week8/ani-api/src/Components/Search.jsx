import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getRandomAnime() {
  const titles = ["Boku no Hero Academia", "Cowboy Bebop", "Katanagatari", "FLCL", "Demon Slayer", "Fate/Zero", "Detective Conan", "Sailor Moon", "Monster", "Legend of Galactic Heroes", "Lucky☆Star", "Jojo's Bizarre Adventure", "Pretty Cure"];
  return titles[Math.floor(Math.random() * titles.length)];
}

const Search = props => {

  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // console.log("The query is being changed", q);
    if(q.length > 2) {
      axios.get(`https://api.jikan.moe/v3/search/anime?q=${q}`)
        .then(res => {
          console.log(res);
          setResults(res.data.results);
        }).catch(err => console.error(err));
      // console.log("SEARCHING!!!")
    } else {
      setResults([]);
    }
  }, [q]);

  const search = e => {
    e.preventDefault();
    if(results.length > 0) {
      props.onSearch(results[0]);
    }
    setQ("");
    setResults([]);
  }

  const select = anime => {
    props.onSearch(anime);
    setQ("");
    setResults([]);
  }

  return (
    <>
    <form onSubmit={search}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Search for an anime like...</span>
        </div>
        <input type="search" className="form-control" placeholder={getRandomAnime()} onChange={e => setQ(e.target.value)} value={q} />
        <div className="input-group-prepend">
          <input type="submit" value="GO!" className="btn btn-primary" />
        </div>
      </div>
    </form>
    <div className="card">
      <ul className="list-group list-group-flush">
        {results.slice(0, 5).map(anime =>
          <li key={anime.mal_id} className="list-group-item" onClick={e => select(anime)}>
            {anime.title}
            <button className="btn btn-sm btn-outline-secondary float-right">View</button>
          </li>
        )}
      </ul>
    </div>
    </>
  );

}

export default Search;