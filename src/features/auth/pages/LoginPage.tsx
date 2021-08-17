import React, { FC, useState } from "react";
import { Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppDispatch } from "../../../app/hooks";
import { authActions } from "../authSlice";

import "./LoginPage.css";

const LoginPage: FC = () => {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };

  const handelLoginClick = () => {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      dispatch(
        authActions.login({
          username: "",
          password: "",
        })
      );
    } else {
      toast("You logged in already");
    }
  };

  return (
    <div className="overlay">
      <form>
        <div className="con">
          <header className="head-form">
            <h2>Log In</h2>
            <p>Login here using your username and password</p>
          </header>
          <br />
          <div className="field-set">
            <input
              className="form-input"
              id="txt-input"
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={handleNameChange}
            ></input>

            <br />

            <input
              id="pwd"
              className="form-input"
              type="password"
              placeholder="Enter your password"
              value={pass}
              onChange={handlePassChange}
            ></input>
          </div>
          <div>
            <Button
              onClick={handelLoginClick}
              style={{
                width: "240px",
                border: "1px solid",
                marginTop: "10px",
              }}
            >
              Login
            </Button>

            <ToastContainer />
            <div className="other">
              <button className="btn submits frgt-pass">Forgot Password</button>
              <button className="btn submits sign-up">Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
