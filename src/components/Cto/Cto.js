import React from "react"
import "./Cto.css"
import { Link } from "react-router-dom"

export default function Cto() {
  return (
    <div className="cto-container">
      <div className="main-content">
        <section className="cto-section">
          <h2>Boost your links today</h2>
          <Link to="./signin" className="btn-type-a big">
            get started
          </Link>
        </section>
      </div>
    </div>
  )
}
