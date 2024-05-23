import React from "react";
import Product from "./Product";
import Services from "./Services";
import { Link } from "react-router-dom";
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
            <h5 className="card-title display-3 fw-bolder mb-0 mt-5">
              Our Products
            </h5>
            <p
              className="homecard-text lead fs-3"
              style={{ color: "#857e7e", fontWeight: "400" }}
            >
              CHECK OUT ALL THE PRODUCTS
            </p>
          </div>
        </div>
      </div>
      <Services />
      {/*-------------------- Product -------------- */}

      <div>
        <div className="container mt-5 py-5">
          <div className=" d-flex row">
            <div className="col-12">
              <h1 className="display-6 fw-normal text-center">
                LATEST PRODUCTS
              </h1>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/*------ Cards ---- */}
      <div className="container d-flex flex-row">
      <div className="col-md-3 mx-1 mb-4">
        <div className="card h-100 text-center p-4" style={{backgroundColor: "rgb(250 250 250)",border: "0px",width: "300px"}}>
          <img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" className="card-img-top" alt="Image"style={{ height:"200px" }} />
          <div className="card-body" style={{ height: "150px" }}>
            <h5 className="card-title mb-0">iphone 9</h5>
            <p className="card-text lead fw-bold">$549</p>
            <Link to="/" className="btn btn-secondary"> Buy Now{" "}</Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 mx-1 mb-4">
        <div className="card h-100 text-center p-4" style={{backgroundColor: "rgb(250 250 250)",border: "0px",width: "300px"}}>
          <img src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg" className="card-img-top" alt="Image"style={{ height:"200px" }} />
          <div className="card-body" style={{ height: "150px" }}>
            <h5 className="card-title mb-0">iphone X</h5>
            <p className="card-text lead fw-bold">$899</p>
            <Link to="/" className="btn btn-secondary"> Buy Now{" "}</Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 mx-1 mb-4">
        <div className="card h-100 text-center p-4" style={{backgroundColor: "rgb(250 250 250)",border: "0px",width: "300px"}}>
          <img src="https://cdn.dummyjson.com/product-images/3/thumbnail.jpg" className="card-img-top" alt="Image"style={{ height:"200px" }} />
          <div className="card-body" style={{ height: "150px" }}>
            <h5 className="card-title mb-0">Samsung Universe 9</h5>
            <p className="card-text lead fw-bold">$1249</p>
            <Link to="/" className="btn btn-secondary"> Buy Now{" "}</Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 mx-1 mb-4">
        <div className="card h-100 text-center p-4" style={{backgroundColor: "rgb(250 250 250)",border: "0px",width: "300px"}}>
          <img src="https://cdn.dummyjson.com/product-images/4/thumbnail.jpg" className="card-img-top" alt="Image"style={{ height:"200px" }} />
          <div className="card-body" style={{ height: "150px" }}>
            <h5 className="card-title mb-0">Oppo F19</h5>
            <p className="card-text lead fw-bold">$1999</p>
            <Link to="/" className="btn btn-secondary"> Buy Now</Link>
          </div>
        </div>
      </div>
      </div>
      
      <div className=" container btn-right d-flex justify-content-end mr-5">
        <a href="/product" className="fs-5" style={{textDecoration:'underline', color:'black'}}>See More</a> <span className="material-symbols-outlined mt-2 mr-2">trending_flat</span>
      </div>
     
      </div>

    
  );
};

export default Home;
