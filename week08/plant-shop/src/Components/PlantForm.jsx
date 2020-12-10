import React, { useState } from 'react';
import FileUpload from './FileUpload';

const PlantForm = props => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const addPlant = e => {
    e.preventDefault();
    props.addPlant({name, price, image});
    setName("");
    setPrice(0);
    setImage("");
  }

  return (
    <form onSubmit={addPlant}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="number" step="0.01" className="form-control" onChange={e => setPrice(e.target.value)} value={price} />
      </div>
      <div className="form-group">
        <label>Image</label>
        <FileUpload onUpload={img => setImage(img)} />
      </div>
      <input type="submit" value="Add Plant to Shop" className="btn btn-outline-success btn-block mt-4" />
    </form>
  );
}

export default PlantForm;