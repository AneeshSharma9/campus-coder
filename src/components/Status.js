import React, { useContext, useEffect, useState } from "react"
import { AccountContext } from "./Account"

const Status = () => {
    const [status, setStatus] = useState(false);

    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession().then((session) => {
            console.log("Session: ", session);
            setStatus(true);
        }).catch((err) => {
            console.log("SessionError: ", err)
            setStatus(false);
        })
    }, [getSession])

    const handleLogout = () => {
        logout();
        window.location.href = "login";
    };

    return <div class="nav-link" >{status ? <button onClick={handleLogout}>Logout</button> : "Not logged in"}</div>
}

export default Status;