import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState([products]);

  const getProducts = async (props) => {
    const url = `https://dummyjson.com/products`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setProducts(parsedData.products);
    setFilteredProducts(parsedData.products); // Initialize filtered products with all products
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProductsByCategory = (category) => {
    if (category === null || category === "all") {
      // If "All" button is clicked or if category is explicitly set to "all", show all products
      setSelectedCategory(null);
      setFilteredProducts(products);
    } else {
      setSelectedCategory(category);
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

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
        <div className="button d-flex justify-content-center mb-2 mt-3 pb-5">
          <button
            className="btn btn-outline-secondary me-4"
            onClick={() => filterProductsByCategory("all")}
          >
            All
          </button>
          <button
            className="btn btn-outline-secondary me-4"
            onClick={() => filterProductsByCategory("laptops")}
          >
            Laptops
          </button>
          <button
            className="btn btn-outline-secondary me-4"
            onClick={() => filterProductsByCategory("smartphones")}
          >
            Mobile Phones
          </button>
          <button
            className="btn btn-outline-secondary me-4"
            onClick={() => filterProductsByCategory("fragrances")}
          >
            Fragrances
          </button>
          <button
            className="btn btn-outline-secondary me-4"
            onClick={() => filterProductsByCategory("skincare")}
          >
            Skincare
          </button>
          <button
            className="btn btn-outline-secondary me-4"
            onClick={() => filterProductsByCategory("groceries")}
          >
            Groceries
          </button>
          <button
            className="btn btn-outline-secondary me-4"
            onClick={() => filterProductsByCategory("home-decoration")}
          >
            Home Decoration
          </button>
        </div>
          {filteredProducts.map((element) => {
            return (
              <>
                <div className="col-md-3 mb-4" key={element.id}>
                  <div className="card h-100 text-center p-4" style={{backgroundColor:"rgb(250 250 250)", border:'0px'}}>
                    <img
                      src={element.thumbnail}
                      className="card-img-top"
                      alt={element.title}
                      style={{ height: "200px" }}
                    />
                    <div className="card-body" style={{ height: "150px" }}>
                      <h5 className="card-title mb-0" key={element.title}>
                        {element.title.substring(0, 20)}
                      </h5>
                      <p className="card-text lead fw-bold" key={element.price}>
                        ${element.price}
                      </p>
                      <Link to="/" className="btn btn-secondary">
                        {" "}
                        Buy Now{" "}
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
        <div className=" d-flex row">
          <div className="col-12">
            <h1 className="display-6 fw-normal text-center">LATEST PRODUCTS</h1>
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
