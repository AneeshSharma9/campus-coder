import React, { useContext, useState } from "react";
import { AccountContext } from "./Account"
/* import UserPool from "../UserPool"
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js"; */


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    const { authenticate } = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();
        authenticate(username, password).then(data => {
            console.log("Logged in!", data);
            window.location.href = "/";

        }).catch(err => {
            console.log("Failed to login", err);
            setError(err);
        });
    };

    return (
        <div class="container">
            <h1>Log in</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input class="form-control" id="usernameInput" aria-describedby="usernameHelp" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input class="form-control" id="passwordInput" aria-describedby="passwordHelp" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button class="btn btn-primary" type="submit" >Login</button>
            </form>
            <a href="signUp">Create an account</a>
            {error && ( 
                <div className="alert alert-danger" role="alert">
                    {error.message}
                </div>
            )}
        </div>
    );
};

export default Login;