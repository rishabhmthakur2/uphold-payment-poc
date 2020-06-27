const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const publicPath = '../public'

app.use(express.static(path.join(__dirname, publicPath)));

app.get('/loggedIn',(req, res)=>{
    const returnCode = req.params.code;
    console.log(returnCode);
    res.send('You are logged in now');
});

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server listing on port: ${process.env.PORT || PORT}`);
});

