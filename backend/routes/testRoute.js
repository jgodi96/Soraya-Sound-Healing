const express = require("express")
const router = express.Router()
const {getTest, setTest, putTest, deleteTest} = require('../controllers/testController.js')



// router.get('/', (req, res) => {
//     res.status(200).json({message : 'Isaiah'})
// })

router.get('/', getTest)



// router.post('/', (req, res) => {
//     res.status(200).json({message: 'Set Goals'})
// })

router.post('/', setTest)

// router.put('/:id', (req,res) => {
//     res.status(200).json({message: `Update goal ${req.params.id}`})
// })

router.put('/:id', putTest)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({message: `Delete goal ${req.params.id}`})
// })

router.delete('/:id', deleteTest)

module.exports = router;