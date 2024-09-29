import "./FAQs.css"
import FAQ from "./FAQ"
const faqsData = [
  {
    id: 0,
    question: "How to edit your URL Links",
    answer: "Manage your URL links through your dashboard",
  },
  {
    id: 1,
    question: "Can I redirect my URL?",
    answer:
      "If you created a URL with our Legacy Site and you want to update the URL it points to, you can redirect it from the old location to its new location.",
  },
  {
    id: 2,
    question: "How long will my URL be available?",
    answer: "Yes, you can use your URL which will never expire!",
  },
  {
    id: 3,
    question: "How to shorten URLs with your personalized vanity domain",
    answer:
      "Setup your subdomain from our vanity domains to make your URLs more personalized!",
  },
  {
    id: 4,
    question: "What information is captured on my dashboard?",
    answer:
      "Get popular metrics on your short links like location, devices, frequent times, social media and more.",
  },
  {
    id: 5,
    question: "Can I create a URL with an alias?",
    answer: "Shortened, readable and easy to remember version of your URL!",
  },
]

const FAQs = () => {
  return (
    <div className="faqs-container">
      <div className="faqs-content">
        <div className="pricing-header m-2">
          <h4>FAQs</h4>
          <p>Frequently asked questions</p>
          <h3>Have questions? We’re here to help.</h3>
        </div>
        <div className="faqs">
          {faqsData.map((faq) => {
            return <FAQ key={faq.id} {...faq} />
          })}
        </div>
      </div>
    </div>
  )
}

export default FAQs
