import React, { useEffect, useState } from 'react';
import { Account } from '../components/Account'
import Navbar from '../components/Navbar'
import { fetchData, deleteData, updateData } from '../AwsFunctions';
import Pool from '../UserPool';


function RequestMgmtPage() {
    const [tableData, setTableData] = useState([]);
    const [outgoingData, setOutgoingData] = useState([]);


    const user = Pool.getCurrentUser().getUsername();

    const fetchDataFromDynamoDb = async () => {
        const data = await fetchData('outgoing-requests');
        console.log(data.Items);
        const filteredData = data.Items.filter(item => item.requested === user);
        setTableData(filteredData);
        const filteredOutgoingData = data.Items.filter(item => item.username === user);
        setOutgoingData(filteredOutgoingData);
    };

    const handleDelete = async (username) => {
        try {
            await deleteData('outgoing-requests', { username });
            console.log(`Record with username ${username} deleted successfully`);
            fetchDataFromDynamoDb();
        } catch (error) {
            console.log('Error deleting record:', error);
        }
    };


    const handleAccept = async (username) => {
        try {
            // Update the record associated with the given username
            const updateExpression = "SET accepted = :accepted";
            const expressionAttributeValues = { ":accepted": "accepted" };

            await updateData('outgoing-requests', { username }, updateExpression, expressionAttributeValues);
            console.log(`Record with username ${username} updated successfully`);

            // Refresh the data after update
            fetchDataFromDynamoDb();
        } catch (error) {
            console.log('Error updating record:', error);
        }
    };

    useEffect(() => {
        fetchDataFromDynamoDb();
    }, []);

    return (
        <Account>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            <Navbar />
            <div class="container">
                <h1>Incoming Requests</h1>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Requester</th>
                            <th scope="col">Service</th>
                            <th scope="col">Directions</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Accepted</th>
                        </tr>
                    </thead>
                    <tbody class="">
                        {tableData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.username}</td>
                                <td>{item.service}</td>
                                <td>{item.directions}</td>
                                <td>{item.endDate}</td>
                                <td>{item.accepted === "false" ? (
                                        <label>N/A until accepted</label>
                                    ) : (
                                        <label>{item.contact}</label>
                                    )}</td>
                                <td>
                                    {item.accepted === "false" ? (
                                        <>
                                            <button onClick={() => handleAccept(item.username)} class="btn btn-outline-success mr-2">✔️</button>
                                            <button onClick={() => handleDelete(item.username)} class="btn btn-outline-danger">❌</button>
                                        </>
                                    ) : (
                                        <label>{item.accepted}</label>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <hr />

                <h1>Outgoing Requests</h1>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Requested</th>
                            <th scope="col">Service</th>
                            <th scope="col">Directions</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Accepted</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {outgoingData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.requested}</td>
                                <td>{item.service}</td>
                                <td>{item.directions}</td>
                                <td>{item.endDate}</td>
                                <td>{item.accepted}</td>
                                <td><button onClick={() => handleDelete(item.username)} class="btn btn-outline-danger">❌</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Account>
    )
}

export default RequestMgmtPage