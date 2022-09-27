import React, {useState, useRef} from "react";
import {StyledLogin} from "./style";
import logo from "../../../public/image/login/logo.svg";
import {Link} from "react-router-dom";
import {Google_apple_btn} from "../../components/google_apple_btn/google_apple_btn";
import {Helmet} from "react-helmet";

export const Login = () => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setDetails({...details, [e.target.value]: e.target.value});
  };

  const [input, setInput] = useState(0);
  const form = useRef();
  const toggleInput = () => {
    setInput(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    console.log(details);
  };
  return (
    <StyledLogin>
      <Helmet>
        <title>Login | Facit</title>
      </Helmet>
      <div className="wrapper">
        <div className="card_row">
          <div className="card_container">
            <div className="card_shadow">
              <div className="card">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <div className="auth_btn">
                  <div className="btn_col">
                    <Link to="/login">
                      <button className="login_up_btn transition">Login</button>
                    </Link>
                  </div>
                  <div className="btn_col">
                    <Link to="/signUp">
                      <button className="sign_up_btn transition">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </div>
                <h1 className="h1">Welcome,,</h1>
                <h4 className="h4">Sign in to continue!</h4>
                <form ref={form} onSubmit={handleSubmit}>
                  {input === 0 ? (
                    <div className="from_floating">
                      <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        className="from_control"
                      />
                      <label>Your email or username</label>
                    </div>
                  ) : (
                    <div className="from_floating">
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="from_control"
                      />
                      <label>Password</label>
                    </div>
                  )}

                  <div className="login_btn">
                    <button onClick={toggleInput}>
                      {input === 0 ? "Continue" : "Login"}
                    </button>
                  </div>
                </form>
                {input === 0 ? <Google_apple_btn /> : ""}
              </div>
            </div>
            <div className="policy_link">
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms of use</Link>
            </div>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
};
