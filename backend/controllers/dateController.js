const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')
const Date = require('../models/dateModel.js')
const router = require("../routes/dateRoute.js")

const registerDate = asyncHandler(async (req, res) => {
    const {hello} = req.body
    const number = 10
    console.log(req.body)
    //res.json([{date: hello}])
    if(!hello){
        res.status(400)
        throw new Error('Please add required fields')
    }
    res.json({message: 'Hello World'})

    const date = await Date.create({
        availableDate: hello,
        availableSpot: number
    })

})

module.exports = {registerDate}