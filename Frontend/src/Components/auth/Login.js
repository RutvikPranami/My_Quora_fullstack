import React, { useState } from "react";
import "./Login.css";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, provider } from "../../firebase";
import { ArrowForwardIos } from "@mui/icons-material";
import { Typography } from "@mui/material";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const signIn = async () => {
    window.alert("Please sign in using  Email and Password");
    // await signInWithPopup(auth, provider)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const fbSign = () => {
    window.alert("Please sign in using  Email and Password");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      return false;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      return false;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        window.alert("You have registered sucessfully");
      })
      .catch((e) => alert(e.message));

    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/archive/9/91/20170609154431%21Quora_logo_2015.svg"
            alt=""
          />
        </div>
        <div className="login__desc">
          <p>A Place to Share knowledge and better understand the world</p>
          <p style={{ color: "royalblue", fontSize: "25px" }}>Created by </p>
          <h3>Rutvik Pranami</h3>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__auth__dec">
              <p>
                By continuing you indicate that you have read and agree to
                Quora's
                <span> Terms of Service </span>
                and <span>Privacy Policy</span>.
              </p>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span onClick={fbSign}>Continue With Facebook</span>
            </div>
            <div className="login__authDesc">
              <p>Sign Up With Email</p>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                  autoComplete="off"
                />
                {error && !email && (
                  <Typography variant="h7" sx={{ color: "red" }}>
                    Enter valid email
                  </Typography>
                )}
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
                {error && !password && (
                  <Typography variant="h7" sx={{ color: "red" }}>
                    Enter valid password
                  </Typography>
                )}
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button onClick={handleSignIn}>Login</button>
            </div>
            <button onClick={registerSignIn}>Register</button>
          </div>
        </div>
        <div className="login__lang">
          <h5 style={{ fontSize: "13px" }}>New:</h5>
          <p></p>
          <p> हिन्दी </p>
          <p> ગુજરાતી</p>
          <ArrowForwardIos fontSize="small" />
        </div>
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Quora, Inc. 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
