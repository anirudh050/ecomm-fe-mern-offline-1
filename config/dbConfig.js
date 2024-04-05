const mongoose = require("mongoose")

const config = {
    connect: () => {
        mongoose.connect(process.env.DB_URL).then(
            () => { console.log("Database connected successfully");
        }
        ).catch((err) => {
            console.log("error",err);
        })
    }
}
module.exports = config;