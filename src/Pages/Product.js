import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/category/electronics");
      // const response = await fetch("https://dummyjson.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="justify-content-center text-center">
          Loading...
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-3 pb-5">
          <button className="btn btn-outline-secondary me-2">All</button>
          <button className="btn btn-outline-secondary me-2">Laptops</button>
          <button className="btn btn-outline-secondary me-2">
            Mobile Phones
          </button>
          <button className="btn btn-outline-secondary me-2">Watches</button>
        </div>
       {filter.map((products) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={products.id}>
                  <img
                    src={products.image}
                    className="card-img-top"
                    alt={products.title}
                    style={{ height: "250px" }}
                  />
                  <div className="card-body" style={{ height: "150px" }}>
                    <h5 className="card-title mb-0">
                      {products.title.substring(0, 20)}
                    </h5>
                    <p className="card-text lead fw-bold">${products.price}</p>
                    <Link to="/" className="btn btn-secondary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Product;
