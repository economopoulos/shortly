import { HiPlusCircle } from "react-icons/hi"
import { HiMinusCircle } from "react-icons/hi"
import { useState } from "react"

const FAQ = ({ question, answer, id }) => {
  const [showFAQ, setShowFAQ] = useState(false)
  function handleClick(index) {
    setShowFAQ(!showFAQ)
  }
  return (
    <>
      <article className="faq">
        <section className="qa">
          <h2>{question}</h2>
          {showFAQ && <p>{answer}</p>}
        </section>
        <HiPlusCircle
          onClick={handleClick}
          className="plus-icon"
          style={showFAQ ? { display: "none" } : { display: "block" }}
        />
        <HiMinusCircle
          onClick={handleClick}
          className="minus-icon"
          style={showFAQ ? { display: "block" } : { display: "none" }}
        />
      </article>
      <span className="hr op-1"></span>
    </>
  )
}
export default FAQ
