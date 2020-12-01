import React from 'react';


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

  return (
    <table className="table table-striped">
      <tbody>
        <tr className="bg-dark text-light">
          <th>Actions</th>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
        {/* {
          createRows(props.products)
        } */}
        {props.products.map( product => 
          <tr key={product.id}>
            <td>
              <button className="btn btn-outline-danger btn-sm">Buy!</button>
              <button className="btn btn-outline-info btn-sm">Edit</button>
            </td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default WishListTable;