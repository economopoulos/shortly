import { FcGoogle } from "react-icons/fc"
import { BsMeta } from "react-icons/bs"
import { FaApple } from "react-icons/fa"
import "./Signin.css"
import { Link } from "react-router-dom"

const Signin = () => {
  return (
    <div className="container-signin">
      <div className="card-container">
        <section>
          <h2>Sign in</h2>
          <button className="signin-google">
            <FcGoogle />
            <p>Sign in with Google</p>
            <span></span>
          </button>
          <div className="btns">
            <Link to="/signin" preventScrollReset={true}>
              <BsMeta />
            </Link>
            <Link to="/signin" preventScrollReset={true}>
              <FaApple />
            </Link>
            <Link to="/signin" preventScrollReset={true}>
              SSO
            </Link>
          </div>
          <h4>or</h4>
          <form id="signin-form">
            <input type="text" placeholder="E-mail*" />
            <input type="text" placeholder="Password*" />
          </form>
          <h3 className="underline">Forgot password?</h3>
          <div className="btn-login">log in</div>
          <section className="redirect">
            <Link to="/signup">
              <h3>Don't have an account?</h3>
            </Link>
            <Link to="/signup" className="underline">
              Get started for free
            </Link>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Signin
