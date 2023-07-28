import React, { useEffect, useState } from 'react';
import { Account } from '../components/Account'
import Navbar from '../components/Navbar'
import Status from "../components/Status"
import Pool from "../UserPool"
import { putData } from '../AwsFunctions';
import Select from "react-select";

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


    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [description, setDesc] = useState(null);

    const options = [
        { value: "Web Development", label: "Web Development" },
        { value: "IOS Development", label: "IOS Development" },
        { value: "Android Development", label: "Android Development" },
        { value: "Scripting", label: "Scripting" },
        { value: "Testing", label: "Testing" },
    ];

    const [selected, setSelected] = useState(null);

    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
        console.log('Option selected:', selectedOption.value);
    };

    const onSubmit = async () => {
        console.log('Option selected:', selected.value)
        const userData = {
            username: username,
            description: description,
            name: name,
            service: selected.value
        }
        await putData('user-table', userData)
    };


    return (
        <Account>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            <Navbar />
            <div class="container">
                <h1 class="customh1">Welcome {fullName}</h1>
                <hr />
                <h3>Offer services</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input class="form-control" id="usernameInput" aria-describedby="emailHelp" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input class="form-control" id="nameInput" aria-describedby="emailHelp" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="Service">Service</label>
                        <Select options={options} onChange={handleChange} autoFocus={true} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input class="form-control" id="descriptionInput" aria-describedby="emailHelp" placeholder="Enter description" value={description} onChange={(event) => setDesc(event.target.value)} />
                    </div>
                    <button class="primary-button btn btn-primary" type="submit" >Save</button>
                </form>
                <hr />
                <Status />
            </div>

        </Account>
    )
}

export default ProfilePage