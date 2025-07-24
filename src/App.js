import React from 'react';
import {Header} from './Header';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
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
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}