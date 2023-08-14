import React from 'react'
import Login from '../components/Login';
import { Account } from "../components/Account"
import Navbar from '../components/Navbar'

function LoginPage() {
    return (
        <Account >
            <Navbar />
            <Login />
        </Account>
    )
}

export default LoginPage