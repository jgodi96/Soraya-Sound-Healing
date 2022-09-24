const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db.js')
const app = express()
const port = process.env.PORT || 5000

connectDB();

app.use('/', require('./routes/testRoute.js'))

app.listen(port, () => console.log(`Running on PORT ${port}`.green))