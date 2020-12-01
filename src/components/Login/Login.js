import React from "react";
import { signInWithGoogle } from "../../firebase";
import loginStyles from "./Login.module.css";

function Login() {
  return (
    <div className={loginStyles.login}>
      <h3 className={loginStyles.header}>CHATME</h3>
      <button className={loginStyles.button} onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/fluent/48/000000/google-logo.png" />
        Login
      </button>
      <h3 className={loginStyles.copyright}>
        Copyright @2020, Ben's creations
      </h3>
    </div>
  );
}

export default Login;
