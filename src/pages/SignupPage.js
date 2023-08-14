import React from 'react'
import { Account } from "../components/Account"
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'

function SignupPage() {
    return (
        <Account>
            <Navbar />
            <Signup />
        </Account>
    )
}

export default SignupPage