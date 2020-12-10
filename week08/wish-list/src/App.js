import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WishListTable from './Components/WishListTable';
import AddForm from './Components/AddForm';
import CustomRouter from './Components/CustomRouter';
import generateId from './generateId';
import bSort from './sort';


function App() {
  
  const getId = generateId();
  const [products, setProducts] = useState([
    {
      id: getId(),
      name: "Keyboard",
      price: "40.00"
    },
    {
      id: getId(),
      name: "Mouse",
      price: "60.00"
    }
  ]);
  // const [currentRoute, setCurrentRoute] = useState("/");

  const productAdded = newProduct => {
    newProduct.id = getId();
    setProducts([...products, newProduct]);
  }

  const removeProduct = productToRemove => {
    console.log(productToRemove);
    // filter to keep the product where the id doesn't match the one to remove
    let tempProducts = products.filter(product => product.id !== productToRemove.id);
    setProducts(tempProducts);
  }

  const editProduct = productToUpdate => {
    const temp = [...products];
    for(let i=0; i<temp.length; i++) {
      if(temp[i].id === productToUpdate.id) {
        temp[i] = productToUpdate;
        break;
      }
    }
    setProducts(temp);
  }

  const mysort = () => {
    setProducts(bSort(products));
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Wish List</h1>
      </div>
      {/* <button onClick={e => setCurrentRoute("/")}>Home</button>
      <button onClick={e => setCurrentRoute("/new")}>New</button> */}
      <Link to="/" className="btn btn-primary">Home</Link>
      <Link to="/new" className="btn btn-secondary">New</Link>
      {/* <CustomRouter header="Custom Router" currentRoute={currentRoute}>
        <WishListTable products={products} removeProduct={removeProduct} editProduct={editProduct} sort={mysort} path="/" />
        <AddForm addProduct={productAdded} path="/new" />
      </CustomRouter> */}
      <div className="card my-5">
        <Router className="card-body">
          <WishListTable products={products} removeProduct={removeProduct} editProduct={editProduct} sort={mysort} path="/" />
          <AddForm addProduct={productAdded} path="/new" />
        </Router>
      </div>
    </div>
  );
}

export default App;
