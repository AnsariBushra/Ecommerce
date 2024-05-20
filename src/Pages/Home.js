import React from "react";
import Product from "./Product";
/*https://media.istockphoto.com/id/959309722/vector/music-abstract-background-blue-equalizer-for-music-showing-sound-waves-with-music-waves-music.jpg?s=612x612&w=0&k=20&c=lsPqnmbXEIa1z7LOq1qSGxNlF12BkMifXdIxWKboWWQ= */
const Home = () => {
  return (
    <div className="home">
      <div className="card text-bg-dark border-0">
        <img
          src="https://media.istockphoto.com/id/1453338188/photo/old-computers-digital-tablets-mobile-phones-many-used-electronic-gadgets-devices-broken.jpg?s=612x612&w=0&k=20&c=hhqrDjtkBRNy0spzlf8-W6pERJkT8i4lxAlYz7aPjHM="
          alt="background"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 mt-5">Our Products</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE PRODUCTS
            </p>
          </div>
        </div>
      </div>
      <Product/>
    </div>
  );
};

export default Home;
