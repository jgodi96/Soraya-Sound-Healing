const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware.js')
const connectDB = require('./config/db.js')
const app = express()
const port = process.env.PORT || 5000

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/testRoute.js'))

app.use(errorHandler)

app.listen(port, () => console.log(`Running on PORT ${port}`.green))