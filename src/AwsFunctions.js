import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
  secretAccessKey: '4c5X7JnuN9+ZtNyuQSjkeXMhBIcz7DOqiwuNj+E5',
  accessKeyId: 'AKIAYVFHLCSWVN2YRP4U',
  region: 'us-east-2',
}

AWS.config.update(configuration)

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        } else {
            console.log(err)
        }
    })
}