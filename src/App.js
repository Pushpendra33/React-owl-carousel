import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import logo from './logo.svg'
import image1 from './image1.jpg'
const App = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={20}
      nav
      dotsEach
      autoplay={true}
      autoplayTimeout={1000}
      autoplayHoverPause
    >
      <div class="item">
        <img
          alt="img1"
          src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="item">
        <img
          alt="img1"
          src="https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="item">
        <img
          alt="img1"
          src="https://images.unsplash.com/photo-1662581872342-3f8e0145668f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="item">
        <img
          alt="img1"
          src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="item">
        <img
          alt="img1"
          src="https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="item">
        <img
          alt="img1"
          src="https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="item">
        <img
          alt="img1"
          src="https://images.unsplash.com/photo-1664574653006-4d7eb5f1a418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="item">
        <img
          alt="img1"
          src={logo}
        />
      </div>
      <div class="item">
        <img
          alt="img1"
          src={image1}
        />
      </div>
    </OwlCarousel>
  );
};

export default App;
