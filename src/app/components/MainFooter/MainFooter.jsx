"use client"
import React from "react";

import { useState } from "react";

import "./Footer.css";
import Image from "next/image";
import facebook from "../../asets/images/facebook.svg";
import Insta from "../../asets/images/instagram.svg";
import twitter from "../../asets/images/twitter.svg";
import Linkedin from "../../asets/images/linkedin.svg";


const MainFooter = () => {

  const [userEmial, setUserEmail] = useState("");
  const [showUserEmailError, setShowUserEmailError] = useState(false)




  const userEmialHandler = (e) => {
    setUserEmail(e.target.value);
    if (userEmial !== "") {
      setUserEmail()
    }
  };



  const handleclick = (e) => {
    e.preventDefault()
    if (userEmial === "") {
      setShowUserEmailError(true);

    }


  }



  return (
    <div className="footer">
      <div className="container py-5">
        <h2 className="text-center text-white">Subscribe to our newsletter</h2>
        <p className="text-center colorr">
          Get expert advice for your journey to university delivered to your
          inbox each <br />
          month. It's short, and worthwhile – we promise!
        </p>



       
        <div className="email" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <input value={userEmial} onChange={userEmialHandler}  type="email" placeholder="Email address" style={{width : '500px', borderRadius: '8px', padding :'10px',}} />
    </div>
          {showUserEmailError && <p className="text-danger fw-bold text-center">enter your valid Email.</p>}

        


        <div className="text-center border-bottom">

          <p className="text-center colorr">
          <input  type="checkbox" alt="" className="check mt-2" />
            I confirm I am over 16 and I agree to the Terms and Conditions and
            Privacy Notice.
          </p>
          <button
            type="button"
            className="btn btn-secondary mt-3 rounded-1 mb-4" onClick={handleclick}> SUBSCRIBE NOW 
          </button>


        </div>


        <ul class="nav align-item-center justify-content-center list-unstyled d-flex mt-4">
          <li class="ms-3"><a class="text-body-secondary" href="#">  <Image src={facebook} alt="" className="" /></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#">     <Image src={Insta} alt="" className="" /></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#">  <Image src={twitter} alt="" className="" /></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#">     <Image src={Linkedin} alt="" className="" /></a></li>
        </ul>

        <div className="text-center">
          <ul class="nav justify-content-center  pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 ">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 ">
                Contact us
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 ">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 ">
                Ters and conditions
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 ">
                Cookie poliy
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 ">
                Privacy
              </a>
            </li>
          </ul>
          <p className="text-white copy">Copyright © 2023 - Mrs. College Guide</p>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
