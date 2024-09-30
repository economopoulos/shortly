import "./App.css"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes, Navigate } from "react-router-dom"
import FAQs from "./components/FAQs/FAQS"
import Pricing from "./components/Pricing/Pricing"
import Signin from "./components/Signin/Signin"
import Signup from "./components/Signup/Signup"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route
            path="https://economopoulos.github.io/shortly/"
            element={<Home />}
          ></Route>
          <Route
            path="https://economopoulos.github.io/shortly/pricing"
            element={<Pricing />}
          ></Route>
          <Route
            path="https://economopoulos.github.io/shortly/faqs"
            element={<FAQs />}
          ></Route>
          <Route
            path="https://economopoulos.github.io/shortly/signin"
            element={<Signin />}
          ></Route>
          <Route
            path="https://economopoulos.github.io/shortly/signup"
            element={<Signup />}
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
