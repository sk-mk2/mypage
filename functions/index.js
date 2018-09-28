const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

exports.helloWorld = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        response.status(200).send("Hello SK");
    });
});
