const mongoose = require('mongoose');
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect("mongodb+srv://mamunur:ZAl6KA3ylazbtD4E@cluster0.unwcd5n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", connectionParams);
        console.log('Connected to database')
    }
    catch(error){
        console.log(error);
        console.log('Error connecting to database');
    }   
}

