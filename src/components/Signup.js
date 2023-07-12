import React, { useState } from "react";
import UserPool from "../UserPool"

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(username, password, [{ 'Name': 'name', 'Value': name }, { 'Name': 'email', 'Value': email }, { 'Name': 'phone_number', 'Value': phoneNum }], null, (err, data) => {
            if (err) {
                console.error(err);
                setError(err);
            } else {
                console.log(data);
                //window.location.href = "login";
            }
        });
    };

    return (
        <div class="container">
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div class="form-group">
                    <label htmlFor="email">Email</label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div class="form-group">
                    <label htmlFor="username">Username</label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div class="form-group">
                    <label htmlFor="phonenum">Phone Number</label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number" value={phoneNum} onChange={(event) => setPhoneNum(event.target.value)} />
                </div>
                <div class="form-group">
                    <label htmlFor="password">Password</label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button class="btn btn-primary" type="submit">Sign Up</button>
            </form>
            {error && ( // Render the alert div if there is an error
                <div className="alert alert-danger" role="alert">
                    {error.message}
                </div>
            )}
        </div>
    );
};

export default Signup;