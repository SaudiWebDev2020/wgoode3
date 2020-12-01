import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WishListTable from './Components/WishListTable';
import AddForm from './Components/AddForm';
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
      <WishListTable products={products} removeProduct={removeProduct} editProduct={editProduct} sort={mysort} />
      <AddForm addProduct={productAdded} />
    </div>
  );
}

export default App;
