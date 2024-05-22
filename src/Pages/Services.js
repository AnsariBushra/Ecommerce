import React from "react";

const Services = () => {
  return (
    <>
      <div className="container-fluid my-4 pt-4">
        <h1 className="display-6 fw-normal mx-0 text-center">OUR SERVICES</h1>
        <hr />
      </div>

      <div className="container-fluid my-2 mb-4 d-flex">
        <div className="service-card mx-5">
          <div className="card-body d-flex flex-row pt-4 pb-0">
            <span className="material-symbols-outlined m-2">
              local_shipping
            </span>
            <h5 className="card-title m-2">FREE DELIVERY</h5>
          </div>
          <p className="card-text mx-4 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            repellat.
          </p>
        </div>

        <div className="service-card mx-3">
          <div className="card-body d-flex flex-row pt-4 pb-0">
            <span className="material-symbols-outlined m-2">sell</span>
            <h5 className="card-title m-2">DAILY OFFERS</h5>
          </div>
          <p className="card-text mx-4 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            repellat.
          </p>
        </div>

        <div className="service-card mx-3">
          <div className="card-body d-flex flex-row pt-4 pb-0">
          <span className="material-symbols-outlined m-2">high_quality</span>
            <h5 className="card-title m-2">QUALITY GUARANTEE</h5>
          </div>
          <p className="card-text mx-4 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            repellat.
          </p>
        </div>

        <div className="service-card mx-3">
          <div className="card-body d-flex flex-row pt-4 pb-0">
          <span className="material-symbols-outlined m-2">payments</span>
            <h5 className="card-title m-2">SECURE PAYMENT</h5>
          </div>
          <p className="card-text mx-4 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            repellat.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
