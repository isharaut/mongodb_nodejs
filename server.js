const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

const username = "admin";
const password = "isha1502!";
const cluster = "Cluster0";
const dbname = "sample_airbnb";

mongoose.connect('mongodb://admin:isha1502!@cluster0-shard-00-02.mfdhd.mongodb.net:27017,cluster0-shard-00-01.mfdhd.mongodb.net:27017,cluster0-shard-00-00.mfdhd.mongodb.net:27017/sample_airbnb?ssl=true&replicaSet=atlas-23ofv3-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
});
// mongoose.connect(
//     `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
//         useNewUrlParser: true,
//         // useFindAndModify: false,
//         useUnifiedTopology: true
//     }
// );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});