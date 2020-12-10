import React from 'react';
import { Link } from '@reach/router';


// function createRows(products) {
//   const newArr = [];
//   for(let product of products) {
//     let rowElement = <tr>
//       <td>
//           <button className="btn btn-outline-danger btn-sm">Buy!</button>
//           <button className="btn btn-outline-info btn-sm">Edit</button>
//       </td>
//       <td>{product.name}</td>
//       <td>{product.price}</td>
//     </tr>;
//     newArr.push(rowElement);
//   }
//   return newArr;
// }


const WishListTable = (props) => {

  console.log(props);

  const buy = (productToBuy) => {
    props.removeProduct(productToBuy)
  }

  const discount = (product) => {
    // apply a 20% "discount"
    product.price = (parseFloat(product.price) * 0.8).toFixed(2);
    props.editProduct(product);
  } 

  return (
    <table className="table table-striped">
      <tbody>
        <tr className="bg-dark text-light">
          <th>Actions</th>
          <th>Product Name</th>
          <th onClick={e => props.sort()}>Product Price ▾</th>
        </tr>
        {/* {
          createRows(props.products)
        } */}
        {props.products.map( (product, i) => 
          <tr key={i}>
            <td>
              <button className="btn btn-outline-danger btn-sm" onClick={ e => buy(product) }>Buy!</button>
              <button className="btn btn-outline-info btn-sm" onClick={ e => discount(product) }>Apply Coupon</button>
              <Link to={"/product/" + product.id} className="btn btn-sm btn-outline-success">View</Link>
            </td>
            <td>{product.name}</td>
            <td>${product.price}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default WishListTable;