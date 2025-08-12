import React from "react";
import {ProductSlider} from './Components/ProductSlider';

export default function Body() {
    
  return (
    <main className="App-body">
      <h5>Welcome to ShopZ</h5>
      <p>Your one-stop shop for all things fashion.</p>
      <ProductSlider/>
    </main>
  );
}
