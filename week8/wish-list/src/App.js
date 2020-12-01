import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WishListTable from './Components/WishListTable';
import AddForm from './Components/AddForm';

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Keyboard",
      price: "$40.00"
    },
    {
      id: 2,
      name: "Mouse",
      price: "$60.00"
    }
  ]);

  const productAdded = newProduct => {
    newProduct.id = products.length+1;
    setProducts([...products, newProduct]);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Wish List</h1>
      </div>
      <WishListTable products={products} />
      <AddForm addProduct={productAdded} />
    </div>
  );
}

export default App;
