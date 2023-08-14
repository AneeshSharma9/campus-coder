import React from "react";
import { ChatApp } from "mirrorfly-uikit/dist";
import "mirrorfly-uikit/dist/assets/scss/bundle.css";
import Pool from "../UserPool";
import { Account } from "../components/Account";
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'
import * as SDK from "mirrorfly-sdk"

function ChatPage() {
    const user = Pool.getCurrentUser().getUsername();

    const location = useLocation();

    const initSDK = async () =>{
        const initializeObj = {
            apiBaseUrl:"https://api-preprod-sandbox.mirrorfly.com/api/v1",
            licenseKey:`${process.env.REACT_APP_MIRRORFLY_KEY}`,
            isTrialLicenseKey:true,
            callbackListeners: {},
        };
        let initSDKResponse = await SDK.initializeSDK(initializeObj);
        console.log("initSDK", initSDKResponse)
    }

    const userLogin = async ()=>{
        initSDK()
        let userRegistration = await SDK.register(user);
        console.log("userRegistration", userRegistration)
        let user2Registration = await SDK.register(location.state.username);
        console.log("user2Registration", user2Registration)
    }

    userLogin();

    console.log(location.state.username);

    const customConversation = {
        conversationValue: true,
        userId: location.state.username
    }

    return (
        <Account>
            <Navbar />
            <ChatApp
                licenseKey="bGgiZSaz6Qjq0T86lW0D4H9Gx8iDNY"
                userIdentifier={`${user}`}
                apiUrl="https://api-preprod-sandbox.mirrorfly.com/api/v1"
                isSandBox={true}
                customConversation={customConversation}
            />
        </Account>
    );
}

export default ChatPage;
