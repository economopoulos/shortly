import React from "react"
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
                <a href="/#" className="link-title">
                  link shortening
                </a>
                <a href="/#" className="link-title">
                  branded links
                </a>
                <a href="/#" className="link-title">
                  analytics
                </a>
              </div>
              <div className="link-content">
                <h3>resources</h3>
                <a href="/#" className="link-title">
                  blog
                </a>
                <a href="/#" className="link-title">
                  developers
                </a>
                <a href="/#" className="link-title">
                  support
                </a>
              </div>
              <div className="link-content">
                <h3>company</h3>
                <a href="/#" className="link-title">
                  about
                </a>
                <a href="/#" className="link-title">
                  careers
                </a>
                <a href="/#" className="link-title">
                  contact
                </a>
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
