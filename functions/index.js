const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const express = require('express');
const app = express();
app.use(cors);
let pushCount = 1;
app.get('/count', (req, res) => {
    res.send(`ボタンを押した回数: ${pushCount++}`);
});
exports.api = functions.https.onRequest(app);
