import { FcGoogle } from "react-icons/fc"
import { BsMeta } from "react-icons/bs"
import { FaApple } from "react-icons/fa"
import "./Signup.css"

const Signup = () => {
  return (
    <div className="container-signin">
      <div className="card-container">
        <section>
          <h2>Create an account</h2>
          <button className="signin-google">
            <FcGoogle />
            <p>Sign up with Google</p>
            <span></span>
          </button>
          <div className="btns">
            <a href="/#">
              <BsMeta />
            </a>
            <a href="/#">
              <FaApple />
            </a>
          </div>
          <h4>or</h4>
          <form id="signin-form">
            <input type="text" placeholder="E-mail*" />
            <input type="text" placeholder="Password*" />
          </form>
          <div className="btn-login">create account</div>
          <section className="agreement">
            <h3>
              By creating this account you agree to Shortly's{" "}
              <span className="underline">Privacy Policy and GDPR</span> and{" "}
              <span className="underline">Terms of service</span>
            </h3>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Signup
