import React, { useState } from 'react';


const AddForm = (props) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const insertProduct = e => {
    e.preventDefault();
    const newProduct = {name, price: parseFloat(price).toFixed(2)};
    props.addProduct(newProduct);
    setName("");
    setPrice(0);
  }

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={insertProduct}>
          <div className="row">
            <div className="col-sm-5">
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" name="name" className="form-control" onChange={e => setName(e.target.value)} value={name} />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-group">
                <label>Product Price</label>
                <input type="number" name="price" step="0.01" min="0" className="form-control" onChange={e => setPrice(e.target.value)} value={price} />
              </div>
            </div>
            <div className="col-sm-2 align-bottom">
              <div className="form-group">
                <label>&nbsp;</label>
                <input type="submit" value="Add" className="btn btn-success btn-block" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

}

export default AddForm;