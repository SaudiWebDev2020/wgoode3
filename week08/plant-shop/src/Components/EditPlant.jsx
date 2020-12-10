import React, { useState } from 'react';
import FileUpload from './FileUpload';

const EditPlant = props => {

  const [name, setName] = useState(props.toEdit.name);
  const [price, setPrice] = useState(props.toEdit.price);
  const [image, setImage] = useState(props.toEdit.image);

  const updatePlant = e => {
    e.preventDefault();
    props.update({name, price, image});
  }

  return (
    <>
    <div style={{backgroundColor: "#9999", position: "fixed", top: 0, left: 0, height: "100vh", width: "100vw"}}></div>
    <div className="modal" tabindex="-1" role="dialog" style={{display: "block"}}>
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Update</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={e => props.cancel()}>
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <form onSubmit={updatePlant}>
                    <div className="modal-body">
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
                    </div>
                    <div className="modal-footer">
                        <input type="submit" value={"Update "+ props.toEdit.name} className="btn btn-info" />
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={e => props.cancel()}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}

export default EditPlant;