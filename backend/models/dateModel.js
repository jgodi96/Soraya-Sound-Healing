const mongoose = require('mongoose')
//const User = require('./userModel.js')

const dateSchema = mongoose.Schema({
    availableDate:
    {
        type: String,
    },
    availableSpot:
    {
        type: Number
    },

    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User', 
    // }

},
{
    timestamps: true
}

)

module.exports = mongoose.model('Date', dateSchema)