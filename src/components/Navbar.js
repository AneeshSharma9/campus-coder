import React, { useState, useEffect } from "react";
import Pool from "../UserPool";
import logo from "../public/campus_coder_logo_temp.png";

function Navbar() {
    const user = Pool.getCurrentUser();
    const getIdToken = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            return new Promise((resolve, reject) => {
                user.getSession((err, session) => {
                    if (err) {
                        console.log("Session Error:", err);
                        reject(err);
                    } else {
                        resolve(session.getIdToken().getJwtToken());
                    }
                });
            });
        }
        return null;
    };

    const [loginLabel, setLoginLabel] = useState("");
    const [loginhrefLabel, setLoginhrefLabel] = useState("");

    useEffect(() => {
        const fetchFullName = async () => {
            const idToken = await getIdToken();
            if (idToken) {
                const decodedToken = JSON.parse(atob(idToken.split(".")[1]));
                const name = decodedToken.name || "Unknown";
                const nameArray = name.split(" ");
                let firstname = nameArray[0];
                setLoginhrefLabel("profile");
                setLoginLabel(firstname);
            } else {
                setLoginhrefLabel("login");
                setLoginLabel("Log In");
            }
        };

        fetchFullName();
    }, []);

    return (

        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="pl-3">
                <a href="/">
                    <img src={logo} alt="Logo" class="" width={50} />
                </a>
            </div>
            <a class="logo ml-4" href="/">
                Campus Coder
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mt-2 mb-2">
                    <li class="nav-item nav-item-style ">
                        <a class="navcolor nav-link pr-4 pl-4" href="/">
                            Home<span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item nav-item-style">
                        <a class="navcolor nav-link pr-4 pl-4" href="explore">
                            Explore
                        </a>
                    </li>
                    <li class="nav-item nav-item-style">
                        {user ? (
                            <a class="navcolor nav-link pr-4 pl-4" href="requestmgmt">
                                Manage Requests
                            </a>
                        ) : null}
                    </li>
                    <li class="login-button mr-4 ml-4">
                        <a class="colorchange nav-link " href={loginhrefLabel}>
                            {loginLabel}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
