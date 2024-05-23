import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary py-2 shadow-sm">
        <div className="container-fluid me-auto d-flex">
          <div>
            <img src="https://media.istockphoto.com/id/1184778656/vector/radio-tower.jpg?s=612x612&w=0&k=20&c=0eNTjnSjPqriCDRKrGmj_JIkvhQhDTi5JEM-gMAfydk=" style={{ width: "40px", height: "43px", borderRadius: "10px"}} className="m-2" alt="" />
          </div>
          <Link className="navbar-brand fs-2 mb-1" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-xl-flex justify-content-xl-start mx-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto fs-4">
              <li className="nav-item mx-2">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav-right d-flex ">
            <span className="material-symbols-outlined m-2" title="login">
                person
            </span>
            <span className="material-symbols-outlined m-2" title="add to wishlist">
                favorite
            </span>            
            <span className="material-symbols-outlined m-2" title="add to cart">
                shopping_cart
            </span>  
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
