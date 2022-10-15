const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')
const router = require("../routes/userRoute")

// @desc    Register New user
// @route   POST/api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const {firstName, lastName, email, phone, password} = req.body
    if(!firstName || !lastName || !email || !phone || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error("Inavlid User Data")
    }
})

// @desc    Authenticate a User
// @route   POST/api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login User'})
})

// @desc    Get User Data
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User Data Display'})
})

module.exports = {registerUser, loginUser, getMe}