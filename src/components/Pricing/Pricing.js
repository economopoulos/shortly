import "./Pricing.css"
import { FaCheckCircle } from "react-icons/fa"
import { useState } from "react"
import { useEffect } from "react"

const Pricing = () => {
  const [isActive, setIsActive] = useState(false)
  const [basicPrice, setBasicPrice] = useState(null)
  const [premiumPrice, setPremiumPrice] = useState(null)
  const [text, setText] = useState("month")
  const features = {
    basic: [
      "Access to basic",
      "1,000 link automation",
      "Unlimited redirects",
      "Link expiration by click limit",
      "URL shortcode (slug) editing",
      "Export raw click data to S3",
      "Password protection",
      "Branded links total",
      "50 folders",
      "1,000 Deep links",
    ],
    premium: [
      "Unlimited users",
      "Unlimited link automation",
      "Unlimited redirects",
      "Link expiration by click limit",
      "URL shortcode (slug) editing",
      "Export raw click data to S3",
      "Password protection",
      "Branded links total",
      "Unlimited folders",
      "Unlimited Deep links",
    ],
  }

  const handleChange = (e) => {
    setIsActive(e.target.checked)
  }

  useEffect(() => {
    calculateAnnualPrice(17, 10, 30)
    if (isActive) {
      setText("year")
    } else {
      setText("month")
    }
  }, [isActive])

  const calculateAnnualPrice = (discount, basicMonthly, premiumMonthly) => {
    let annualBasic = Math.ceil(
      basicMonthly * 12 - (basicMonthly * 12 * discount) / 100
    )
    let annualPremium = Math.ceil(
      premiumMonthly * 12 - (premiumMonthly * 12 * discount) / 100
    )
    if (isActive) {
      setBasicPrice(annualBasic)
      setPremiumPrice(annualPremium)
      let discountPrice = Math.ceil((premiumMonthly * 12 * discount) / 100)
    } else {
      setBasicPrice(basicMonthly)
      setPremiumPrice(premiumMonthly)
    }
  }

  return (
    <div className="pricing-container">
      <section className="pricing-content">
        <div className="pricing-header">
          <h4>Pricing</h4>
          <p>Plans that fits you</p>
          <h3>
            Simple, transparent pricing that grows with you. Try any plan for 30
            days.
          </h3>
          <div className="toggle-pricing">
            <span>monthly</span>
            <label className="switch">
              <input onChange={handleChange} type="checkbox"></input>
              <span className="slider round"></span>
            </label>
            <span>annual</span>
          </div>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card-container m-2">
            <div className="pricing-card-header">
              <div className="info">
                <h2>Basic plan</h2>
                <p>Our most popular plan for small teams.</p>
              </div>
              <div className="price">
                <p>
                  <span id="price">${basicPrice}</span>per {text}
                </p>
              </div>
            </div>
            <span className="hr op-1"></span>
            <section className="features-container">
              <h2>Features</h2>
              <p>Everything in our free plan plus...</p>
              <article className="features">
                {features.basic.map((item, index) => {
                  return (
                    <div key={index} className="feature">
                      <FaCheckCircle className="checkIcon" /> {item}
                    </div>
                  )
                })}
              </article>
            </section>
            <span className="hr op-1"></span>
            <div className="btn-login w-80">get started</div>
          </div>
          <div className="pricing-card-container m-2">
            <div className="pricing-card-header">
              <div className="info">
                <h2>Premium plan</h2>
                <p>Advanced features and reporting.</p>
              </div>
              <div className="price">
                <p>
                  <span id="price">${premiumPrice}</span>per {text}
                </p>
              </div>
            </div>
            <span className="hr op-1"></span>
            <section className="features-container">
              <h2>Features</h2>
              <p>Everything in our free & basic plan plus...</p>
              <article className="features">
                {features.premium.map((item, index) => {
                  return (
                    <div key={index} className="feature">
                      <FaCheckCircle className="checkIcon" /> {item}
                    </div>
                  )
                })}
              </article>
            </section>
            <span className="hr op-1"></span>
            <div className="btn-login w-80">get started</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
