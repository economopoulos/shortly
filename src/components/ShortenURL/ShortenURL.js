import React, { useEffect, useState } from "react"
import "./ShortenURL.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link } from "react-router-dom"

export default function ShortenURL() {
  const [input, setInput] = useState("")
  const [inputArr, setInputArr] = useState([])
  const [links, setLinks] = useState([])
  const [visible, setVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const url = "https://" + input

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    const storedInputArr = JSON.parse(localStorage.getItem("inputArr")) || []
    const storedLinks = JSON.parse(localStorage.getItem("links")) || []
    if (storedInputArr.length > 0 && storedLinks.length > 0) {
      setInputArr(storedInputArr)
      setLinks(storedLinks)
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("inputArr", JSON.stringify(inputArr))
    localStorage.setItem("links", JSON.stringify(links))
  }, [inputArr, links])

  const checkInput = () => {
    if (!input.endsWith(".com")) {
      setErrorMessage(true)
      return false
    } else {
      setErrorMessage(false)
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input && checkInput()) {
      fetchLink()
    } else {
      setErrorMessage(true)
    }
    setInput("")
  }

  const fetchLink = async () => {
    try {
      const res = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
      )
      if (!res.ok) {
        throw new Error("something went wrong")
      }
      const data = await res.text()
      setLinks((prev) => [...prev, data])
      setInputArr((prev) => [...prev, input])
      setVisible(true)
    } catch (error) {
      setErrorMessage(true)
    }
  }

  const resetInput = (e) => {
    e.preventDefault()
    if (input && checkInput()) {
      fetchLink()
    }
    setInput("")
    if (!input) {
      setErrorMessage(true)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      resetInput(e)
    }
  }

  const onCopyText = (index) => {
    setCopiedIndex(index)
    setTimeout(() => {
      setCopiedIndex(null)
    }, 1500)
  }

  const handleClear = () => {
    localStorage.clear()
    setInputArr([])
    setLinks([])
    setVisible(false)
  }

  return (
    <div className="shortenerURL-container">
      <div className="main-content">
        <div className="offset-container">
          <section className="inputURL">
            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
              <input
                value={input}
                onChange={handleInput}
                className=""
                type="text"
                placeholder="Shorten a link here..."
              />
              {errorMessage && (
                <h5 className="error-message">Please add a link</h5>
              )}
              <button onClick={resetInput} className="btn-square">
                shorten it!
              </button>
              {visible && (
                <Link className="btn-square" onClick={handleClear}>
                  clear all
                </Link>
              )}
            </form>
          </section>
          {visible &&
            inputArr.map((input, index) => (
              <section key={index} className="outputURL ">
                <div className="outputURL-response">
                  <h3>{input}</h3>
                  <div>
                    <h3 style={{ fontSize: "0.85rem" }}>
                      {links[index].substring(8)}
                    </h3>
                    <CopyToClipboard
                      text={links[index]}
                      onCopy={() => onCopyText(index)}
                    >
                      <a to="/" preventScrollReset={true} className="btn-small">
                        copy
                      </a>
                    </CopyToClipboard>
                    {copiedIndex === index && <p id="copied-txt">copied</p>}
                  </div>
                </div>
              </section>
            ))}
        </div>
      </div>
    </div>
  )
}
