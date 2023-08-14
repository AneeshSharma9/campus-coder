import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_lU9bDdazo",
    ClientId: "58bu8jqkh7ok43goc18d2k4155"
}

const userPool = new CognitoUserPool(poolData);

export default userPool;