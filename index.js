require('dotenv').config('.env');
require('./ConfigMongo');
const express = require('express');
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const createUserRoute = require('./Routes/createUserRoute');
const getUsersRoute = require('./Routes/getUsersRoute');
const updateUserRoute = require('./Routes/updateUserRoute');
const deleteUserRoute = require('./Routes/deleteUserRoute');
const getUserRoute = require('./Routes/getUserRoute');

app.use('/api/create',createUserRoute);
app.use('/api/getusers',getUsersRoute);
app.use('/api/getuser',getUserRoute);
app.use('/api/updateuser',updateUserRoute);
app.use('/api/deleteuser',deleteUserRoute);

app.listen(PORT,()=>console.log(`app is running on port ${PORT}`))