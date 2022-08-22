const express = require('express')
const dotenv = require('dotenv').config()


const app = express()
const port = process.env.PORT || 5000

app.use('/', require('./routes/testRoute.js'))

app.listen(port, () => console.log(`Running on PORT ${port}`))