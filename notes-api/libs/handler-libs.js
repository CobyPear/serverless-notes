export default function handler(lambda) {
    return async function (event, context) {
        let body, statusCode;

        try {
            // Run the lambda
            body = await lambda(event, context);
            statusCode = 200;
        } catch (error) {
            body = { error: error.message };
            statusCode = 500;
        }

        // return HTTP response
        return {
            statusCode,
            body: JSON.stringify(body)
        };
    };
}