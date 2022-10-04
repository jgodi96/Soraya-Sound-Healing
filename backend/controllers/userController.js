const asyncHandler = require('express-async-handler')
const router = require("../routes/userRoute")
const User = require('../models/userModel.js')

const getUser = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

const setUser = asyncHandler(async (req, res) => {
    if (!req.body.username){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const user = await User.create({
        username: req.body.username
    })

    res.status(200).json(user)
})

const putUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedUser)
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('User Not Found')
    }
    user.remove()

    res.status(200).json({message: req.params.id})
})

module.exports = {getUser, setUser, putUser, deleteUser}