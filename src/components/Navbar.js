import React from 'react'
import logo from './img/logo.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <a className="navbar-brand" href="#">
                      <img src={logo} alt="logo" height={50}/>
                  </a>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link" href="#">Statistics</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">About</a>
                      </li>
                  </ul>
                  <form className="d-flex">
                      <input className="form-control me-2 border-secondary" type="search" placeholder="Search" aria-label="Search"/>
                  </form>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
