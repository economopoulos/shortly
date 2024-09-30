import React from "react"
import logo from "../../images/logo.svg"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"

export default function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false)
  const handleNav = () => {
    setNavbarVisible(!navbarVisible)
  }
  const handleClick = () => {
    setNavbarVisible(false)
  }
  return (
    <div className="main-content flex-remove nav-container">
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul
          className={`links-section resp ${
            navbarVisible ? "visible" : "hidden"
          }`}
        >
          {navbarVisible && (
            <li>
              <Link onClick={handleClick} to="/">
                Home
              </Link>
            </li>
          )}
          <li>
            <Link onClick={handleClick} to="/pricing">
              pricing
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/faqs">
              FAQs
            </Link>
          </li>

          <li>
            <Link onClick={handleClick} to="/signin">
              login
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="/signup"
              className="btn-type-a reset"
            >
              Sign up
            </Link>
          </li>
        </ul>
        <button
          onClick={handleNav}
          className="menu"
          style={{ color: navbarVisible ? "white" : "black" }}
        >
          <AiOutlineMenu />
        </button>
      </nav>
    </div>
  )
}
