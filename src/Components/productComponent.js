import React from "react";
import "../Styles/productComponent.css";

function ProductComponent({ product, onClose }) {
  if (!product) return null; // nothing if no product

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖ </button>
        <img src={product.image} alt={product.title} className="modal-image" />
        <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Rating:</strong> {product.rating.rate} ⭐</p>
        <h3>${product.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
