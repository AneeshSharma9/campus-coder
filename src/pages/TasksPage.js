import React, { useEffect, useState } from 'react';
import { Account } from '../components/Account'
import Navbar from '../components/Navbar'
import { fetchData, deleteData, updateData } from '../AwsFunctions';
import Pool from '../UserPool';
import { useNavigate } from 'react-router-dom';


function TasksPage() {
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
                <h1 class="customh1">Your Tasks</h1>
                <table class="table">
                    <thead class="table-bg">
                        <tr>
                            <th scope="col">Requester</th>
                            <th scope="col">Service</th>
                            <th scope="col">Directions</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Chat</th>
                            <th scope="col">Accepted</th>
                            <th scope="col">Submit</th>
                        </tr>
                    </thead>
                    <tbody class="">
                        {tableData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.username}</td>
                                <td>{item.service}</td>
                                <td>{item.directions}</td>
                                <td>{item.endDate}</td>
                                <td>
                                    <button onClick={() => { toComponentB(item.username) }} className="secondary-button btn">Message</button>
                                </td>
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
                                <td>
                                    {item.accepted === "false" ? (
                                        <>
                                            <label>N/A until accepted</label>
                                        </>
                                    ) : (
                                        <div>
                                            <button type="button" className="secondary-button btn" data-toggle="modal" data-target="#exampleModal">Github Link</button>
                                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Github Project Link</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="form-outline m-4 input-wrap">
                                                            <input required
                                                                type="link"
                                                                id="linkInput"
                                                                class="input-field form-control form-control-lg"
                                                                value={link}
                                                                onChange={(event) => setLink(event.target.value)}
                                                            />
                                                            <label>Link</label>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn secondary-button" data-dismiss="modal">Close</button>
                                                            <button onClick={checkLink} type="button" class="btn primary-button">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Account>
    )
}

export default TasksPage