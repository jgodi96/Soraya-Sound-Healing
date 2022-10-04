const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please add a username']
    },
}, 
{
    timestamps: true
}

)

module.exports = mongoose.model('User', userSchema)