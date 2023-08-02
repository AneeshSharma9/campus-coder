import React, { useContext, useState } from "react";
import { AccountContext } from "./Account";
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
            <section>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card innerlogincard">
                                <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                            alt="login form"
                                            class="img-fluid loginimage"
                                        />
                                    </div>
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body text-black pr-5">
                                            <form onSubmit={onSubmit}>
                                                <div class="d-flex align-items-center mb-3 pb-1">
                                                    <i class="fas fa-cubes fa-2x me-3"></i>
                                                    <span class="customh1 mb-0">Campus Coder</span>
                                                </div>

                                                <h5 class="fw-normal mb-3 pb-3 login-spacing">Sign into your account</h5>

                                                <div class="form-outline mb-4">
                                                    <input
                                                        type="username"
                                                        id="usernameInput"
                                                        class="form-control form-control-lg"
                                                        placeholder="Username"
                                                        value={username}
                                                        onChange={(event) => setUsername(event.target.value)}
                                                    />
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="passwordInput"
                                                        class="form-control form-control-lg"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(event) => setPassword(event.target.value)}
                                                    />
                                                </div>
                                                {error && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {error.message}
                                                    </div>
                                                )}
                                                <div class="pt-1 mb-4">
                                                    <button class="primary-button login-button-shadow btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                                </div>
                                                <a class="small text-muted" href="/login">
                                                    Forgot password?
                                                </a>
                                                <p class="">
                                                    Don't have an account?{" "}
                                                    <a href="signUp" class="small-link">
                                                        Register here
                                                    </a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
