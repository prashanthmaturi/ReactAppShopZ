import React,{useEffect,useState} from "react";
export default function Body() {
  /*  let Products=[
        {id:1, name:"Shirt", price:29.99},
        {id:2, name:"Pants", price:49.99}, 
        {id:3, name:"Shoes", price:89.99},
        {id:4, name:"Hat", price:19.99},
        {id:5, name:"Jacket", price:99.99},
        {id:6, name:"Socks", price:9.99},
        {id:7, name:"Belt", price:24.99},
        {id:8, name:"Scarf", price:14.99},  
        {id:9, name:"Gloves", price:29.99},
        {id:10, name:"Sweater", price:39.99},
        {id:11, name:"T-shirt", price:19.99},
        {id:12, name:"Shorts", price:34.99},
        {id:13, name:"Skirt", price:44.99},
        {id:14, name:"Blouse", price:49.99},
        {id:15, name:"Coat", price:129.99},
        {id:16, name:"Boots", price:109.99},
        {id:17, name:"Sandals", price:39.99},
        {id:18, name:"Flip-flops", price:14.99},
        {id:19, name:"Sweatshirt", price:49.99},
        {id:20, name:"Tracksuit", price:79.99}
    ]
*/
    function addCartItem(product) {
            alert(`Added ${product.title} to cart`);
    }
    let [Products,setProducts] =useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products') 
            .then((response) => response.json())
            .then((json) => setProducts(json))
    },[])

  return (
    <main className="App-body">
      <h2>Welcome to ShopZ</h2>
      <p>Your one-stop shop for all things fashion.</p>
      <div className="products-container">
        {Products.map((product)=>(
          <div className="product-cart" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <p>{product.title}</p>
            <p className="product-rating">Rating :{product.rating.rate}</p>
            <h4>${product.price}</h4>
            <button id='app-btn' onClick={() => addCartItem(product)}>Add to Cart</button>
            </div>
        ))}
      </div>
    </main>
  );
}
