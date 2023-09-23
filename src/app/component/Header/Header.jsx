import React from "react";
import "./header.css";
import Image from "next/image";
import logo from "../../asets/images/Variant2.svg";
import reactangle from "../../asets/images/Rectangle.svg";
import image from "../../asets/images/image.svg";
import star from "../../asets/images/Star 1.svg";
import react from "../../asets/images/Rectangle 5.svg";
import arrow from "../../asets/images/Arrow.svg";


const Header = () => {
  return (
    <div className="bg-color">
      <div className="container">
      
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="logo" width={160} />
          </a>

          {/* Add the toggler button here */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li>
                <a href="#" className="nav-clour text-white nav-link px-2 ">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="nav-clour text-white nav-link px-2">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="nav-clour text-white nav-link px-2">
                  create
                </a>
              </li>
              <li>
                <a href="#" className="nav-clour text-white nav-link px-2">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-clour text-white nav-link px-2">
                  Contact
                </a>
              </li>
            </ul>

            <div className="navbar-icons justify-content-between d-flex">
              <div className="decorative-space d-flex">
                <button class="primary-button rounded-3">
                  <span className="primary-button_text rounded-3">Buy Now</span>
                </button>
              
              </div>
              <span className="text-white  pt-4 mt-3  px-2">Sing Up</span>
            </div>
          </div>
        </nav>
        <Image src={star} className="star" />

        <div class="row featurette">
          
          <div class="col-md-7 order-md-1">
            <h1 className="heading fw-bold">
              Be one of the first 3 <br />
              people to buy this <br />
              <span className="span-title">NFT</span>
            </h1>
            <p className="pera">
              and get a 10$ bonus along with the <br /> purchase
            </p>
            <div className="d-flex">
              <p className="price">
                the price of <br />
                this NFT : 23 $ <Image src={arrow} className="" /> 18 $
              </p>
              <div className="decorative-space mx-4">
                <button class="primary-button rounded-3">
                  <span className="primary-button_text rounded-3">Buy Now</span>
                </button>
              </div>
            </div>
            <div className="card-color px-4 py-4 rounded-4   text-white mb-5 mt-2">
              <div className="d-flex justify-content-between">
                <h6>Collections</h6>
                <h6>Artist</h6>
                <h6>Communlty</h6>
              </div>
              <div className="d-flex justify-content-between">
                <span className="fw-bold numb">450K+</span>
                <span className="fw-bold numb">320K+</span>
                <span className="fw-bold numb">15K+</span>
              </div>
            </div>
          </div>
          <div class="col-md-5 order-md-2">
            <Image src={image} alt="image" className="shadow" width={300} />
            <Image src={reactangle} alt="" height={340} />
            <Image src={react} alt="" className="back-shadow" height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
