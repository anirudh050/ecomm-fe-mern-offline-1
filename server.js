require("dotenv").config();
const express = require("express");
const app = express();

app.get('/first', (req,res) => {
    res.json({"message":"Server up and running"})
});

app.listen(process.env.PORT, () => console.log(`listening to requests on port ${process.env.PORT}`));