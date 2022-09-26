const router = require("../routes/testRoute");

const getTest = (req, res) => {
    res.status(200).json({message: 'Isaiah'})
}

const setTest = (req, res) => {
    if (!req.body.text){
        res.status(400);
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set Goal'})
}

const putTest = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

const deleteTest = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {getTest, setTest, putTest, deleteTest}