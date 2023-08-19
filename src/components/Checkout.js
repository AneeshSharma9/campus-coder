import { CLIENT_ID } from '../config/Config'
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { Account } from "../components/Account"


const Checkout = () => {
    const location = useLocation();
    const item = location.state.item

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Sunflower",
                    amount: {
                        currency_code: "USD",
                        value: 20,
                    },
                },
            ],
        }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    }, [success]);

    const onSubmit = (event) => {
        console.log('payment sent')
    };

    return (
        <Account>
            <Navbar />
            <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
                <div class="offset"></div>

                <section class="text-lg-start">
                    <div class="container py-4 p-5">
                        <div class="align-items-center p-5">
                            <div class="signupcard-border">
                                <div class="card cascading-right cas-right-card" >
                                    <div class="card-body p-5 shadow-5 ">
                                        <h2 class="fw-bold mb-4">Payment Details</h2>
                                        <form onSubmit={onSubmit}>

                                            <label>Requested</label>
                                            <input readOnly type="text" id="form3Example3" class="form-control mb-4" value={item.requested} />

                                            <label>Service</label>
                                            <input readOnly required type="phonenum" id="form3Example9" class="form-control mb-4" value={item.service} />

                                            <label>Task</label>
                                            <input readOnly required type="username" id="form3Example9" class="form-control mb-4" value={item.directions} />

                                            <PayPalButtons
                                                style={{ layout: "vertical", disableMaxWidth: true, color: "blue"}}
                                                createOrder={createOrder}
                                                onApprove={onApprove}
                                            />


                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </PayPalScriptProvider>
        </Account>

    );
}

export default Checkout