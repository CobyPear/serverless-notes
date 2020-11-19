import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        /*
        Defines condition for the query
        only returns item with matching 'userId'
        */
        KeyConditionExpression: 'userId = :userId',
        /*
        Defines value in the condition
        ':userId': defines 'userId' to be the id of the author
        */
        ExpressionAttributeValues: {
            ':userId': '123',
        }
    };

    const result = await dynamoDb.query(params);

    return result.Items;
});