import React,{useEffect,useState} from "react";
import axios from'axios';
import ProductComponent from "./productComponent";

function Product() {
  
  function addCartItem(product) {
              alert(`Added ${product.title} to cart`);
      }
      let [Products,setProducts] =useState([]);

      
      useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
          .then(response => setProducts(response.data))
          .catch(error => console.error(error));
      },[])

      let[selectproduct ,setSelectProduct]=useState(null);

      function modelview(product){
        setSelectProduct(product);  }
  return (
    <div className="product-details">
      <h5>Product Details</h5>
      <p>This is where the product details will be displayed.</p>
      <div className="products-container">
        {Products.length === 0 && <p>No products loaded</p>}
        
        {Products.map((product)=>(
            
          <div onClick={()=>modelview(product)}className="product-cart" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <p>{product.title}</p>
            <div className="product-details-pos">
            <p className="product-rating">Rating :{product.rating.rate} ⭐</p>
            <h4>${product.price}</h4>
            <button className='app-btn product-btn' onClick={() => addCartItem(product)}>Add to Cart</button></div>
            </div>
        ))}
      </div>
      {
        selectproduct &&(
          <ProductComponent product={selectproduct}
                    onClose={() => setSelectProduct(null)}
          />

        )
      }
    </div>
  );
}

export default Product;