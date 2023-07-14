import React, { useState, useEffect } from 'react'
import Pool from '../UserPool';

function Navbar() {
    const getIdToken = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            return new Promise((resolve, reject) => {
                user.getSession((err, session) => {
                    if (err) {
                        console.log('Session Error:', err);
                        reject(err);
                    } else {
                        resolve(session.getIdToken().getJwtToken());
                    }
                });
            });
        }
        return null;
    };

    const [fullName, setFullName] = useState('');
    const [loginLabel, setLoginLabel] = useState('');
    const [requestMgmtLabel, setRequestMgmtLabel] = useState('');

    useEffect(() => {
        const fetchFullName = async () => {
            const idToken = await getIdToken();
            if (idToken) {
                const decodedToken = JSON.parse(atob(idToken.split('.')[1]));
                console.log(decodedToken);
                const name = decodedToken.name || 'Unknown';
                setLoginLabel('');
                setFullName(name);
                setRequestMgmtLabel('Manage Requests')
            } else {
                setLoginLabel('Log In');
                setFullName('');
                setRequestMgmtLabel('')
            }
        };

        fetchFullName();
    }, []);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Campus Coder</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="explore">Explore</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="requestmgmt">{requestMgmtLabel}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login">{loginLabel}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="profile">{fullName}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar