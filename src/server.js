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
    request.post({
        url: `https://api-sandbox.uphold.com/oauth2/token`, form: {
            client_id: client_id,
            client_secret: client_secret,
            code: '95eabbe9f8163757f1bcaed03f87fc5a59356ddd',
            grant_type: 'authorization_code'
        }
    }, (err, response)=>{
        console.log(response.body);
    });
    res.send("Completed");
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listing on port: ${process.env.PORT || PORT}`);
});

