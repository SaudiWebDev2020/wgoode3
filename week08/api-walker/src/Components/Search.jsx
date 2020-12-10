import React, { useState } from 'react'
import { navigate } from '@reach/router';

const Search = props => {

  const [category, setCategory] = useState("people");
  const [id, setId] = useState(1);

  const search = e => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
  }

  return (
    <form className="my-5" onSubmit={search}>
      <div className="row">
        <div className="col-sm-5">
          <select className="form-control" onChange={e => setCategory(e.target.value)} value={category}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <div className="col-sm-5">
          <input type="number" className="form-control" min="1" onChange={e => setId(e.target.value)} value={id} />
        </div>
        <div className="col-sm-2">
          <input type="submit" className="btn btn-block btn-primary" value="Search" />
        </div>
      </div>
    </form>
  )
}

export default Search
