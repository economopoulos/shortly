import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"
import logo from "../../images/logo.svg"
import iconMeta from "../../images/icon-facebook.svg"
import iconInstagram from "../../images/icon-instagram.svg"
import iconPinterest from "../../images/icon-pinterest.svg"
import iconTwitter from "../../images/icon-twitter.svg"

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="main-content">
        <section className="footer-content">
          <img className="light-logo" src={logo} alt="logo" />
          <article className="items">
            <div className="links">
              <div className="link-content">
                <h3>features</h3>
                <Link
                  to="/shortly"
                  preventScrollReset={true}
                  className="link-title"
                >
                  link shortening
                </Link>
                <Link
                  to="/shortly"
                  preventScrollReset={true}
                  className="link-title"
                >
                  branded links
                </Link>
                <Link
                  to="/shortly"
                  preventScrollReset={true}
                  className="link-title"
                >
                  analytics
                </Link>
              </div>
              <div className="link-content">
                <h3>resources</h3>
                <Link
                  to="/shortly"
                  preventScrollReset={true}
                  className="link-title"
                >
                  blog
                </Link>
                <Link
                  to="/shortly"
                  preventScrollReset={true}
                  className="link-title"
                >
                  developers
                </Link>
                <Link
                  to="/shortly"
                  preventScrollReset={true}
                  className="link-title"
                >
                  support
                </Link>
              </div>
              <div className="link-content">
                <h3>company</h3>
                <Link
                  to="/shortly"
                  preventScrollReset={true}
                  className="link-title"
                >
                  about
                </Link>
                <Link
                  to="/shortly"
                  preventScrollReset={true}
                  className="link-title"
                >
                  careers
                </Link>
                <Link
                  to="/shortly"
                  preventScrollReset={true}
                  className="link-title"
                >
                  contact
                </Link>
              </div>
            </div>
            <div className="icons">
              <img src={iconMeta} alt="Meta Link" />
              <img src={iconTwitter} alt="Twitter Link" />
              <img src={iconPinterest} alt="Pinterest Link" />
              <img src={iconInstagram} alt="Instagram Link" />
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}
