import React from "react"
import "./Statistics.css"
import iconBrand from "../../images/icon-brand-recognition.svg"
import iconDetailed from "../../images/icon-detailed-records.svg"
import iconFully from "../../images/icon-fully-customizable.svg"

export default function Statistics() {
  return (
    <div className="statistics-container">
      <div className="main-content">
        <section className="statistics-info">
          <h2>Advanced Statistics</h2>
          <p>
            Track how you links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>
        <section className="futures">
          <div className="future">
            <div className="future-container">
              <div className="icon">
                <img src={iconBrand} alt="icon" />
              </div>
              <h3>brand recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content
              </p>
            </div>
          </div>
          <div className="future">
            <div className="future-container">
              <div className="icon">
                <img src={iconDetailed} alt="icon" />
              </div>
              <h3>detailed records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="future">
            <div className="future-container">
              <div className="icon">
                <img src={iconFully} alt="icon" />
              </div>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}