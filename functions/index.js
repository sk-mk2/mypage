const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const express = require('express');
const count = require('./routes/count');
const app = express();
app.use(cors);
let pushCount = 1;
app.get('/count', count);
app.get('/getMemo', () => {

});
exports.api = functions.https.onRequest(app);
