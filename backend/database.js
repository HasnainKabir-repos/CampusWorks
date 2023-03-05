const mongoose = require('mongoose');
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect("mongodb+srv://chadspl:chadspl@cluster0.sevp7ws.mongodb.net/?retryWrites=true&w=majority", connectionParams);
        console.log('Connected to database')
    }catch(error){
        console.log(error);
        console.log('Error connecting to database')
    }
}
