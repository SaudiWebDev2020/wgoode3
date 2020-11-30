import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = props => {

  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("The query is being changed", q);
    if(q.length > 2) {
      axios.get(`https://api.jikan.moe/v3/search/anime?q=${q}`)
        .then(res => {
          console.log(res);
          setResults(res.data.results);
        }).catch(err => console.error(err));
        console.log("SEARCHING!!!")
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

  return (
    <>
    <form onSubmit={search}>
      <div className="form-group">
        <label>Search</label>
        <input type="search" className="form-control" placeholder="Search" onChange={e => setQ(e.target.value)} value={q} />
      </div>
      <input type="submit" value="GO!" className="btn btn-outline-dark" />
    </form>
    <ul className="list-group">
      {
        results.slice(0, 5).map(anime =>
          <li key={anime.mal_id} className="list-group-item">{anime.title}</li>
        )
      }
    </ul>
    </>
  );

}

export default Search;