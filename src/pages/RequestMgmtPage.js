import React, { useEffect, useState } from 'react';
import { Account } from '../components/Account'
import Navbar from '../components/Navbar'
import { fetchData, deleteData, updateData } from '../AwsFunctions';
import Pool from '../UserPool';
import { useNavigate } from 'react-router-dom';


function RequestMgmtPage() {
    const [tableData, setTableData] = useState([]);
    const [outgoingData, setOutgoingData] = useState([]);
    const [link, setLink] = useState("");

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
            const updateExpression = "SET accepted = :accepted";
            const expressionAttributeValues = { ":accepted": "accepted" };

            await updateData('outgoing-requests', { username }, updateExpression, expressionAttributeValues);
            console.log(`Record with username ${username} updated successfully`);

            fetchDataFromDynamoDb();
        } catch (error) {
            console.log('Error updating record:', error);
        }
    };

    useEffect(() => {
        fetchDataFromDynamoDb();
        // eslint-disable-next-line
    }, []);

    const navigate = useNavigate();

    const toComponentB = (username) => {
        navigate('/chat', { state: { username } });
    }

    const checkLink = () => {
        if (!link.includes("https://github.com")){
            console.log('false')
        }else{
            console.log('true')
        }
    }

    return (
        <Account>
            <Navbar />
            <div class="offset"></div>
            <div class="container">
                <h1 class="customh1">Your Requests</h1>
                <table class="table">
                    <thead class="table-bg">
                        <tr>
                            <th scope="col">Requested</th>
                            <th scope="col">Service</th>
                            <th scope="col">Directions</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Accepted</th>
                            <th scope="col">Chat</th>
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
                                <td>
                                    <button onClick={() => { toComponentB(item.requested) }} className="secondary-button btn">Message</button>
                                </td>
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