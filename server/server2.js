const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'../client')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'../client/index.html'));
})
app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
})
