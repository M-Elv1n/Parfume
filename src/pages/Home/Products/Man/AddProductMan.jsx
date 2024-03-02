import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct({ addProduct }) {
  const [productName, setProductName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(productName);
    setProductName("");
    navigate("/");
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;