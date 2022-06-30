import React from 'react'
import logo from './img/logo.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <Link className="nav-link" to="/">
                      <img src={logo} alt="logo" height={50}/>
                  </Link>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link className="nav-link" to="/statistics">Statistics</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/about">About</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
