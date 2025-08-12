import React from 'react';
import {Header} from './Header';
import Product from './Components/Products';
import Men from './Components/MenProducts';
import Women from './Components/WomenProducts';
import Jewelery from './Components/Jewelery';
import Electronics from './Components/Electronics';
import Contact from './Components/Contact';
import About from './Components/About';
import Body from './Body';
import Footer from './Footer';
import './Styles/App.css'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter basename="/ReactAppShopZ">
      <Header />
      <Routes className="routing-components">
        <Route path="/" element={<Body />} />
        <Route path="/products" element={<Product />} />
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/jewelery" element={<Jewelery/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}