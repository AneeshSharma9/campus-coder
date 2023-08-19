import React, { useContext, useState } from "react";
import { AccountContext } from "./Account";
import logo from '../public/campus_coder_logo_temp.png'

/* import UserPool from "../UserPool"
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js"; */

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const { authenticate } = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();
        authenticate(username, password)
            .then((data) => {
                console.log("Logged in!", data);
                window.location.href = "/";
            })
            .catch((err) => {
                console.log("Failed to login", err);
                setError(err);
            });
    };

    return (
        <div>
            <div class="offset"></div>
            <section class="text-center text-lg-start">
                <div class="container py-4">
                    <div class="row g-0 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0 signupcard-border">
                            <div class="card cascading-right cas-right-card" >
                                <div class="card-body p-5 shadow-5 text-center align-self-center">
                                    <div class="d-flex align-items-center align-self-center mb-3 pb-1">
                                        <img src={logo} alt="Logo" class="" width={65} />
                                        <h1 class="customh1 ml-3">Propello</h1>
                                    </div>

                                    <h5 class="fw-normal mb-3 pb-3 login-spacing">Sign into your account</h5>
                                    <form onSubmit={onSubmit}>
                                        <div class="form-outline mb-4 input-wrap">
                                            <input required type="username" id="form3Example9" class="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                                            <label>Username</label>
                                        </div>

                                        <div class="form-outline mb-4 input-wrap">
                                            <input required type="password" id="form3Example4" class="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                                            <label>Password</label>
                                        </div>

                                        {error && (
                                            <div className="alert alert-danger" role="alert">
                                                {error.message}
                                            </div>
                                        )}

                                        <button type="submit" class="btn primary-button login-button-shadow btn-block mb-4">
                                            Login
                                        </button>

                                        <p class="">
                                            Don't have an account?{" "}
                                            <a href="signUp" class="small-link">
                                                Register here
                                            </a>
                                        </p>
                                        <a class="small text-muted" href="/login">
                                            Forgot password?
                                        </a>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-5 mb-lg-0 signup-image-height">
                            <img src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" class="signupcard-border w-100"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Login;
