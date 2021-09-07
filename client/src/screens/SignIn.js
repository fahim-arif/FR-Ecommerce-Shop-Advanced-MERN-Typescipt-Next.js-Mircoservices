import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";

// import { login } from "../../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loading";

import "../components/styles/Signin.css";

const SignIn = ({ history }) => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error, userInfo } = userLogin;

  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (userInfo) {
  //     history.push("/");
  //   }
  // }, [history, userInfo]);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      // dispatch(login(null, null, token));
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
    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;
    // dispatch(login(enteredEmail, enteredPassword));
  };
  return (
    <>
      {/* {error && <Message>{error}</Message>}
      {loading && <Loader></Loader>} */}
      <div className='text-center pt-4 mt-4'>
        <Link to='/'>
          <img src='/images/FR Store.png' alt='' />
        </Link>
      </div>
      <div className='SignIn-container pt-5'>
        <form onSubmit={submitHandler} className='SignIn-form'>
          <div className='SignIn-heading'>Sign in</div>
          <button className='SignIn-sign-in-fb-button'>
            <div className='SignIn-fb-icon-cotainer'>
              <i class='fab fa-facebook-f'></i>
            </div>
            Sign in with Facebook
          </button>
          <GoogleLogin
            clientId='467376469735-hcegq1jl707hqpq7f45coe2b26aipmbj.apps.googleusercontent.com'
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className='SignIn-sign-in-google-button'
              >
                <div className='SignIn-google-icon-cotainer'>
                  <i class='fab fa-google fa-2x'></i>
                </div>
                Sign in with Google
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          ></GoogleLogin>
          <div className='SignIn-or'>OR</div>
          <input
            ref={inputEmailRef}
            className='SignIn-email_sign'
            type='text'
            placeholder='Email/Username'
          />

          <input
            ref={inputPasswordRef}
            className='SignIn-password_sign'
            type='password'
            placeholder='Password'
          />
          <div className='SignIn-button-continue-container'>
            <button className='SignIn-button-continue'>Continue</button>
          </div>

          <div className='SignIn-remember-forgot-cotainer'>
            <button className='SignIn-remember'>Remember Me</button>
            <button className='SignIn-forgot'>Forgot Password</button>
          </div>
          <div className='SignIn-join-now-button'>
            Not a member yet?
            <Link className='SignIn-join-now'>Join Now</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
