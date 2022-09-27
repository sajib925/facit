import React, {useRef, useState} from "react";
import {StyledSignUp} from "./style";
import logo from "../../../public/image/login/logo.svg";
import {Link} from "react-router-dom";
import {Google_apple_btn} from "../../components/google_apple_btn/google_apple_btn";
import { Helmet } from "react-helmet";

export const SignUp = () => {
  const [details, setDetails] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });
  const form = useRef();
  const handleChange = (e) => {
   setDetails({...details,[e.target.name] : e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    form.current.reset();
    console.log(details);
  };
  return (
    <StyledSignUp>
      <Helmet>
        <title>Sign Up | Facit</title>
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
                <h1 className="h1">Create Account,</h1>
                <h4 className="h4">Sign up to get started!</h4>
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="from_floating">
                    <input
                      type="email"
                      name="email"
                      className="from_control"
                      required
                      onChange={handleChange}
                    />
                    <label>Your email</label>
                  </div>
                  <div className="from_floating">
                    <input
                      type="text"
                      name="name"
                      className="from_control"
                      required
                      onChange={handleChange}
                    />
                    <label>Your name</label>
                  </div>
                  <div className="from_floating">
                    <input
                      type="text"
                      name="surname"
                      className="from_control"
                      required
                      onChange={handleChange}
                    />
                    <label>Your surname</label>
                  </div>
                  <div className="from_floating">
                    <input
                      type="password"
                      name="password"
                      className="from_control"
                      required
                      onChange={handleChange}
                    />
                    <label>Password</label>
                  </div>
                  <div className="sign_up_btn">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>

                <Google_apple_btn />
              </div>
            </div>
            <div className="policy_link">
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms of use</Link>
            </div>
          </div>
        </div>
      </div>
    </StyledSignUp>
  );
};
