const router = (require('express')).Router();

/**
 * HTTP Response Codes Breakdown
 * 100-199 - Informational Responses
 * 200-299 - Successful Responses
 * 300-399 - Redirection Responses
 * 400-499 - Client Error Responses
 * 500-599 - Server Error Responses
 */

/**
 * @description Builds the response to send back to the requesting client based
 *              on parameters provided by the calling function.
 */
function sendResponse(res, response, code) {
    res.status(code);
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
}

/**
 * @description Accepts in a GET request but responds with a 400 error,
 *              stating that GET requests are not allowed on this API.
 */
router.get('/', (req, res) => {
    sendResponse(res, {
        extendedStatus: 'GET requests are not allowed on this API',
        status: 'failure',
        success: false
    }, 403); // Status Code 403 = "Forbidden"
});

/**
 * @description Accepts in a PUT request and responds with a 200 status,
 *              stating that the PUT request was received and processed.
 */
router.put('/', (req, res) => {
    // Typically, some additional logic will exist here; often calling upon some data
    // service to update or manipulate records in the database.

    sendResponse(res, {
        extendedStatus: 'A valid PUT request has been received and processed.',
        status: 'success',
        success: true
    }, 201); // Status Code 201 = "Resource Created"
});

/**
 * @description Accepts in a PUT request and responds with a 200 status,
 *              stating that the PUT request was received and processed.
 */
router.post('/', (req, res) => {
    // Typically, some additional logic will exist here; often calling upon some data
    // service to insert or manipulate records in the database.

    sendResponse(res, {
        extendedStatus: 'A valid POST request has been received and processed.',
        status: 'success',
        success: true
    }, 201); // Status Code 201 = "Resource Created"
});

/**
 * @description Accepts in a PUT request and responds with a 200 status,
 *              stating that the PUT request was received and processed.
 */
router.delete('/', (req, res) => {
    // Typically, some additional logic will exist here; often calling upon some data
    // service to delete or manipulate records in the database.

    sendResponse(res, {
        extendedStatus: 'A valid DELETE request has been received and processed.',
        status: 'success',
        success: true
    }, 204); // Status Code 202 (Accepted) or 204 (No Content) is typical in cases of DELETE
});

module.exports = router;