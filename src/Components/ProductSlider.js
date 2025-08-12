import axios from 'axios';
import React,{ useState,useEffect,useRef } from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "../Styles/Slider.css"
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function ProductSlider() {
     let[products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>setProducts(response.data))
    },[])
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 slideshowComponent">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={2}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // auto slide every 3 sec
          disableOnInteraction: false, // restart autoplay after user touch
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="rounded-xl shadow-lg custom-swiper"

      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col items-center p-6 rounded-xl shadow-md slides-container">
              <img 
                src={product.image}
                alt={product.title}
                className="object-cover rounded-lg mb-4 slideimg"
              />
              <div className="description">
                <p className='title'>{product.title}</p>
                <br></br>
                <p>{product.category}</p>
                <p className="desc">{product.description}</p></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export {ProductSlider};