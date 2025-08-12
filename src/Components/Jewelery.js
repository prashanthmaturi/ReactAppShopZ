import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Jewelery() {

    function addCartItem(product) {
        alert(`Added ${product.title} to cart`);
    }

    let [Products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const jewelery = response.data.filter(
                    item => item.category === "jewelery"
                );
                setProducts(jewelery)
            }
            )
            .catch(error => console.error(error));
    }, [])

    return (
        <div className='product-details'>
            <h5>Jewelery</h5>
            <div className="products-container">
                {Products.length === 0 && <p>No products loaded</p>}

                {Products.map((product) => (
                    <div className="product-cart" key={product.id}>
                        <img src={product.image} alt={product.title} className="product-image" />
                        <p>{product.title}</p>
                        <div className="product-details-pos">
                        <p className="product-rating">Rating :{product.rating.rate}⭐</p>
                        <h4>${product.price}</h4>
                        <button className='app-btn product-btn' onClick={() => addCartItem(product)}>Add to Cart</button></div>
                    </div>
                ))}
            </div>
        </div>
    )
}