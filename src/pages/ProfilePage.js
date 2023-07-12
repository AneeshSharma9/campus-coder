import React, { useEffect, useState } from 'react';
import { Account } from '../components/Account'
import Navbar from '../components/Navbar'
import Status from "../components/Status"
import Pool from "../UserPool"

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

function ProfilePage() {
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        const fetchFullName = async () => {
            const idToken = await getIdToken();
            if (idToken) {
                const decodedToken = JSON.parse(atob(idToken.split('.')[1]));
                console.log(decodedToken);
                const name = decodedToken.name || 'Unknown';
                setFullName(name);
            } else {
                setFullName('Unknown');
            }
        };

        fetchFullName();
    }, []);

    return (
        <Account>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            <Navbar />
            <h2>{fullName}</h2>
            <Status />
        </Account>
    )
}

export default ProfilePage