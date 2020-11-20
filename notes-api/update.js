import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id,
        },
        /*
            UpdateExpression defines attributes to be updated
            ExpressionAttributeValues defines value in the update expression
        */
        UpdateExpression: 'SET content = :content, attachment = :attachment',
        ExpressionAttributeValues: {
            ':attachment': data.attachment || null,
            ':content': data.content || null,
        },
        /*
            ReturnValues specifies if and how to return the items' attributes,
            where ALL_NEW returns all attributes of the item after the update;
            you can inspect 'result' below to see how it works with different settings
        */
       ReturnValues: 'ALL_NEW',
    };

    await dynamoDb.update(params);

    return { status: true };
});