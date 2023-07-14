import React, { useState, useEffect } from 'react'
import { Account } from "../components/Account"
import Navbar from '../components/Navbar'
import { fetchData } from '../AwsFunctions';
import { useNavigate } from 'react-router-dom';

function ExplorePage() {
    const [cardsData, setCardsData] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [outgoingData, setOutgoingData] = useState([]);

    const fetchDataFromDynamoDb = async (event) => {
        const data = await fetchData('user-table');
        console.log(data.Items);
        setCardsData(data.Items);
        console.log(searchWord)
        console.log(cardsData)
        const filteredOutgoingData = searchWord !== "" ? data.Items.filter(item => item.service === searchWord) : data.Items;
        setOutgoingData(filteredOutgoingData);
    };

    useEffect(() => {
        fetchDataFromDynamoDb();
    }, []);

    const navigate = useNavigate();

    const toComponentB = (card) => {
        navigate('/request', { state: { card } });
    }

    return (
        <Account>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            <Navbar />

            <div class="container">
                <h2>Browse Services</h2>
                <div class="d-flex">
                    <div>
                        <div class="form-inline py-3">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search service" value={searchWord} aria-label="Search" onChange={(event) => setSearchWord(event.target.value)} />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={fetchDataFromDynamoDb}>Search</button>
                        </div>
                    </div>
                    <div class="ml-auto p-2">
                        <a class="btn btn-outline-success my-2 my-sm-0" href="profile">+</a>
                    </div>
                </div>

                <div class="d-flex flex-wrap justify-content-start py-2">
                    {outgoingData.map((card, index) => (
                        <div class="card mr-3 my-3" style={{ width: "22rem" }} key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{card.name} | {card.username}</h5>
                                <h6 className="card-title">{card.service}</h6>
                                <p className="card-text">{card.description}</p>
                                <a onClick={() => { toComponentB(card) }} className="btn btn-primary text-light">Request</a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </Account>
    )
}

export default ExplorePage