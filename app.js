require('dotenv').config();
const express = require('express');

const cors = require("cors")

const connectToDb = require('./db.js')

const app = express();

//express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

//init connection to db
connectToDb()

const userRoutes = require('./Routes/userRouts.js')

app.use('/',userRoutes);

module.exports = app;