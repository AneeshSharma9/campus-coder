import React from 'react'
import { Account } from '../components/Account'
import Navbar from '../components/Navbar'
import Status from "../components/Status"
import Pool from "../UserPool"



function ProfilePage() {
    const getName = () => {
        const user = Pool.getCurrentUser();
        return user.getUsername();
    }

    return (
        <Account>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            <Navbar />
            <Status />
            <h1>{getName()}</h1>
        </Account>
    )
}

export default ProfilePage