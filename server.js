require("dotenv").config();
const express = require("express");
const config = require("./config/dbConfig");

const app = express();
//establish connection with db
config.connect();


app.get('/first', (req,res) => {
    res.json({"message":"Server up and running"})
});

app.listen(process.env.PORT, () => console.log(`listening to requests on port ${process.env.PORT}`));