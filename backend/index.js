require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./database');

const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const UserInfoRoutes = require('./routes/user_info');

const jobRoutes = require('./routes/jobs');

//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/user_info',UserInfoRoutes);



const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))