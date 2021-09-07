import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { registerUser } from "../actions/userAction";
import Message from "../components/Message";
import Loader from "../components/Loading";

import "../components/styles/Signin.css";

const SignUp = ({ history, location }) => {
  const [nextStep, setNextStep] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [message2, setMessage2] = useState(null);
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, user } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo, dispatch]);

  const nextStepHandler = (e) => {
    e.preventDefault();
    setNextStep(true);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    setEmail(result.email);
    // console.log(result);
    setToken(token);
    setNextStep(true);
    try {
      // dispatch({ type: "AUTH", data: { result, token } });
    } catch (error) {
      console.error(error);
    }
  };

  const googleFailure = (error) => {
    console.log("Failure");
    console.log(error);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length < 6) {
      setMessage2(
        "That’s too short. A great username must include at least 6 characters."
      );
    }
    if (password.length < 8 && confirmPassword.length < 8) {
      setMessage("Password must be min. 8 characters.");
    } else if (confirmPassword !== password) {
      setMessage("Password did not matched");
    } else if (name.length >= 6) {
      setMessage("");
      setMessage2("");
      dispatch(registerUser(name, email, password));
    }
  };
  return (
    <>
      {loading && <Loader></Loader>}
      {error && <Message>{error}</Message>}
      <div className='text-center pt-4 mt-4'>
        <Link to='/'>
          <img src='/images/FR Store.png' alt='' />
        </Link>
      </div>
      <div className='SignUp-container pt-5'>
        <form onSubmit={submitHandler} className='SignUp-form'>
          <div className='SignIn-heading'>Create account</div>
          <div className='alertMessage'>
            {message2 && <Message variant='danger'>{message2}</Message>}
          </div>
          <label className='signUp_label'>Your Full Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className='SignIn-email'
            type='text'
          />
          <label className='signUp_label'>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='SignIn-email'
            type='email'
          />{" "}
          <div className='alertMessage'>
            {message2 && <Message variant='danger'>{message}</Message>}
          </div>
          <label className='signUp_label'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='SignIn-email'
            type='password'
          />{" "}
          <label className='signUp_label'>Re-enter Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='SignIn-email'
            type='password'
          />
          <div className='SignIn-button-continue-container'>
            <button type='submit' className='SignIn-button-continue'>
              Continue with FR Store
            </button>
          </div>
          <div className='SignIn-remember-forgot-cotainer '>
            By joining I agree to receive emails from FR Store.
          </div>
          <div className='SignIn-join-now-button'>
            Already Joined?
            <Link className='SignIn-join-now'>Sign In</Link>
          </div>
        </form>
      </div>
      )
    </>
  );
};

export default SignUp;
