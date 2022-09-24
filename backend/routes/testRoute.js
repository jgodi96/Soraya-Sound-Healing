const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
    res.json({message : 'Isaiah'})
})

module.exports = router;


router.put('/:id', (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})