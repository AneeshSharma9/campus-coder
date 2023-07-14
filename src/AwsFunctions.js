import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
    secretAccessKey: 'tTkOzUU7dL9MHIpSbJKEHvOqREEAqaZE+dKw8i9W',
    accessKeyId: 'AKIAYVFHLCSW3WZIS7NH',
    region: 'us-east-2',
}

AWS.config.update(configuration)

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
    return new Promise((resolve, reject) => {
        const params = {
            TableName: tableName,
        };

        docClient.scan(params, function (err, data) {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
};

export const putData = (tableName, data) => {
    var params = {
        TableName: tableName,
        Item: data
    }

    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
        }
    })
}

export const updateData = (tableName, key, updateExpression, expressionAttributeValues) => {
    return new Promise((resolve, reject) => {
        const params = {
            TableName: tableName,
            Key: key,
            UpdateExpression: updateExpression,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: "UPDATED_NEW"
        };

        docClient.update(params, function (err, data) {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
};

export const deleteData = (tableName, key) => {
    return new Promise((resolve, reject) => {
        const params = {
            TableName: tableName,
            Key: key
        };

        docClient.delete(params, function (err, data) {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
};