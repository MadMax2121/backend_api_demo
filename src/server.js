const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

app.use(cors()); // This enables CORS for all routes and origins

// Your existing code follows

const uri = "mongodb+srv://mmoskalenko21:12421360Albinaa@cluster0.f58oxqy.mongodb.net/?retryWrites=true&w=majority";

async function connect () {
    try {
        await mongoose.connect(uri);
        console.log("works")
    } catch (error) {
        console.log(error);
    }
}

app.listen(3001,() => {
    console.log("running on port 3000");
})

app.get("/test", (req, res) => {
    res.send('port 3000 get request');
  });




  connect();


