"use client"

import React from 'react'
import  { useState } from 'react';
import './Header.css'

const UserHeader = () => {








  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand " href="/">
          <h4>Mrs. College Guide</h4>
          </a>
          <button
            className={`navbar-toggler ${menuOpen ? '' : 'collapsed'}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-center justify-content-center ${menuOpen ? 'show' : ''}`} id="navbarNav">



            <ul className="navbar-nav">
              <li><a href="#" className="nav-link px-2 link-secondary">Universities</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Courses</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Community</a></li>
           <li><a href="#" className="nav-link px-2 link-dark">News</a></li>
           <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
            </ul>
         
            <div className='buttons'>
            <span className="me-2">Login</span>
             <button type="button" class="btn btn-warning text-white">Sign-up</button>
            </div>
          </div>
        </div>
      </nav>
    </header>





















  //     <div className="container">


  //       <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">

  //         <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
  //           <h4>Mrs. College Guide</h4>



  //         </a>

  //         <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
  //           <li><a href="#" className="nav-link px-2 link-secondary">Universities</a></li>
  //           <li><a href="#" className="nav-link px-2 link-dark">Courses</a></li>
  //           <li><a href="#" className="nav-link px-2 link-dark">Community</a></li>
  //           <li><a href="#" className="nav-link px-2 link-dark">News</a></li>
  //           <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
  //         </ul>

  //         <div class="col-md-3 text-end">
  //           <span className="me-2">Login</span>

  //           <button type="button" class="btn btn-warning text-white">Sign-up</button>
  //         </div>
  //       </nav>
  //     </div>

  //   </div>
  )
}

export default UserHeader;