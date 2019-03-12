import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import {Link} from "react-router-dom"
const Navigation = props => {
  return (
      <header className="container">
          <div className="row">
              <div className="col-md-2">
                  <a className="navbar-brand marginlogo" href="#">
                      <img src={require('../assets/logo/logo-alterra-academy.png')}/>
                  </a>
              </div>
              <div className="col-md-10">
                  <ul className="nav navbar-content-end nav-kanan">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/gallery" className="nav-link">Gallery</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/news" className="nav-link">News</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/profil" className="nav-link">Profil</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/signin" className="nav-link">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => props.postSignout()}>Logout</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </header>
  )
}

export default Navigation;