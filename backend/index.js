const express = require('express');
const app = express();

const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://hasnainkabir120:nbspl2@campusworks.ommmdwm.mongodb.net/?retryWrites=true&w=majority"
).then(
    () => {
        console.log('Database Connected')
    }
    
).catch(
    () =>
    {
        console.log('Connection Failed')
    }
    
)

app.get(
    "/",
    (req, res) => {
        res.send("hello")
    }
)

app.listen(
    5000,
    ()=> console.log("Backend is running")
)