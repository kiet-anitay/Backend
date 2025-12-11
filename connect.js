const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("db connected"))
    .catch((error) => {
        console.log("error while db connection")
        console.error(error)
        process.exit(1)
    })
}

 module.exports = dbConnect;