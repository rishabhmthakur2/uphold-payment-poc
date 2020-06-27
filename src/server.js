const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const PORT = 3000;
const publicPath = '../public'
const returnCode = "";
const client_id = "f56ec8dd7cc31ab9f199a3c599e879aa27dfcb63";
const client_secret = "e3849adec6208c914ab461b9ed9c2d04cbbfcf7c";


app.use(express.static(path.join(__dirname, publicPath)));

app.get('/loggedIn', async (req, res) => {
    returnCode = req.query.code;
    const response = await request.post({url:`https://api-sandbox.uphold.com/oauth2/token`,form: {
        client_id: client_id,
        client_secret: client_secret,
        code: returnCode,
        grant_type: 'authorization_code'
    }});
    res.send(response.body);
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listing on port: ${process.env.PORT || PORT}`);
});

