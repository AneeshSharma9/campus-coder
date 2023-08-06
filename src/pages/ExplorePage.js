import React, { useState, useEffect } from 'react'
import { Account } from "../components/Account"
import Navbar from '../components/Navbar'
import { fetchData } from '../AwsFunctions';
import { useNavigate } from 'react-router-dom';
import Pool from "../UserPool"

function ExplorePage() {
    const user = Pool.getCurrentUser();

    const [cardsData, setCardsData] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [outgoingData, setOutgoingData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 15;

    const fetchDataFromDynamoDb = async (event) => {
        const data = await fetchData('user-table');
        console.log(data.Items);
        setCardsData(data.Items);
        console.log(searchWord)
        console.log(cardsData)
        const lowerSearchWord = searchWord.toLowerCase();

        const filteredOutgoingData = searchWord !== ""
            ? data.Items.filter(item => item.service.toLowerCase().includes(lowerSearchWord))
            : data.Items;
        setOutgoingData(filteredOutgoingData);
        setCurrentPage(1);
    };

    useEffect(() => {
        fetchDataFromDynamoDb();
        // eslint-disable-next-line
    }, [searchWord]);

    const navigate = useNavigate();

    const toComponentB = (card) => {
        navigate('/request', { state: { card } });
    }

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = outgoingData.slice(indexOfFirstCard, indexOfLastCard);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(outgoingData.length / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    const clearing = () => {
        setSearchWord("");
    }

    return (
        <Account>
            <Navbar />

            <div class="container">
                <h1 class="customh1">Browse Services</h1>
                <div class="d-flex">
                    <div>
                        <div class="form-inline py-3">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search service" value={searchWord} aria-label="Search" onChange={(event) => setSearchWord(event.target.value)} />
                            <button class="btn btn-outline-success secondary-button my-2 my-sm-0 ml-2" type="submit" onClick={clearing}>Clear</button>
                        </div>
                    </div>
                    <div class="ml-auto p-2">
                        {user ? (
                            <a class="secondary-button btn btn-outline-success my-2 my-sm-0" href="profile">+</a>
                        ) : null}
                    </div>
                </div>

                <div class="d-flex flex-wrap justify-content-start py-2">
                    {currentCards.map((card, index) => (
                        <div class="customcard card mr-3 my-3" style={{ width: "22rem" }} key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{card.name}</h5>
                                <h6 className="card-title">{card.service}</h6>
                                <p className="card-text">{card.description.length > 41 ? `${card.description.substring(0, 41)}...` : card.description}</p>
                                <button onClick={() => { toComponentB(card) }} className="primary-button btn btn-primary text-light">Request</button>
                            </div>
                        </div>
                    ))}
                </div>

                <nav aria-label="Page navigation" class="p-4">
                    <ul className="pagination justify-content-center">
                        {pageNumbers.map((number) => (
                            <li key={number} className={`page-item ${currentPage === number ? 'active custombg' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(number)}>{number}</button>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>

        </Account>
    )
}

export default ExplorePage