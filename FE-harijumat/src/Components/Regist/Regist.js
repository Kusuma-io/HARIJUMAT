import React from "react";
import Axios from "axios";
import { useState } from "react";
import "./Regist.css";
import signup from "../../Image/signup.jpg";

function Regist(props) {
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:8080/regist", {
      firstName: firstNameReg,
      lastName: lastNameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="container">
        <div className="container col-xl-10 col-xxl-8 px-4 w-100">
          <div className="row align-items-center g-lg-5 py-1 ">
            <div className="col-lg-7 ">
              <img src={signup} alt="" width="420" height="420" />
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <h1 className="text-center fw-bold">Sign Up</h1>
              <form className="p-4 p-md-5 border rounded-3 bg-dark">
                <div className="form-floating mb-3">
                  <input
                    type="fname"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="First Name"
                    onChange={(e) => {
                      setFirstNameReg(e.target.value);
                    }}
                  />
                  <label for="floatingfname">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="lname"
                    className="form-control"
                    id="floatinglname"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastNameReg(e.target.value);
                    }}
                  />
                  <label for="floatinglname">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3 text-white">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button
                  className="w-100 btn btn-lg btn-outline-success"
                  type="submit"
                  onClick={register}
                >
                  Sign Up
                </button>
                <hr className="my-1" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Regist;
