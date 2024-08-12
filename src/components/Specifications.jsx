import React from "react";
import "../assets/productsData";
import "../styles/Reviews.css";

function Specifications({ Brand, category, model, type, connectivity }) {
  return (
    <div className="specifications-container">
      <h1 className="reviews-title"> Specifications</h1>
      <table className="specifications-table">
        <tbody>
          <tr>
            <th>Brand</th>
            <td>{Brand}</td>
          </tr>
          <tr>
            <th>Model</th>
            <td>{model}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{type}</td>
          </tr>
          <tr>
            <th>Connectivity</th>
            <td>{connectivity}</td>
          </tr>
          <tr>
            <th>Microphone</th>
            <td>Yes</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{category}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Specifications;
