import React, { useState } from "react";
import UserPool from "../UserPool"

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phonenum, setPhoneNum] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [error, setError] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(username, password, [{ 'Name': 'name', 'Value': (firstname + " " + lastname) }, { 'Name': 'email', 'Value': email }, { 'Name': 'phone_number', 'Value': phonenum }], null, (err, data) => {
            if (err) {
                console.error(err);
                setError(err);
            } else {
                console.log(data);
                window.location.href = "./login";
            }
        }
        );
    };

    return (
        <div>
            <section class="text-center text-lg-start">

                <div class="container py-4">
                    <div class="row g-0 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0 signupcard-border">
                            <div class="card cascading-right cas-right-card" >
                                <div class="card-body p-5 shadow-5 text-center">
                                    <h2 class="customh1 fw-bold mb-5">Sign up now</h2>
                                    <form onSubmit={onSubmit}>
                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input type="text" id="form3Example1" class="form-control" placeholder="First name" value={firstname} onChange={(event) => setFirstName(event.target.value)} />
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input type="text" id="form3Example2" class="form-control" placeholder="Last name" value={lastname} onChange={(event) => setLastName(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example3" class="form-control" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="phonenum" id="form3Example9" class="form-control" placeholder="Phone number (include country code)" value={phonenum} onChange={(event) => setPhoneNum(event.target.value)}/>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="username" id="form3Example9" class="form-control" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4" class="form-control" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                                        </div>

                                        {error && ( 
                                            <div className="alert alert-danger" role="alert">
                                                {error.message}
                                            </div>
                                        )}

                                        <button type="submit" class="btn primary-button login-button-shadow btn-block mb-4">
                                            Sign up
                                        </button>
                                    </form>
                                    <p class="">Already have an account?{" "}
                                            <a href="login" class="small-link">
                                                Login here
                                            </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-5 mb-lg-0 signup-image-height">
                            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" class="signupcard-border w-100"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Signup;