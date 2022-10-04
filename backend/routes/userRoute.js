const express = require("express")
const router = express.Router()
const {getUser, setUser, putUser, deleteUser} = require('../controllers/userController.js')



// router.get('/', (req, res) => {
//     res.status(200).json({message : 'Isaiah'})
// })

router.get('/', getUser)



// router.post('/', (req, res) => {
//     res.status(200).json({message: 'Set Goals'})
// })

router.post('/', setUser)


// router.put('/:id', (req,res) => {
//     res.status(200).json({message: `Update goal ${req.params.id}`})
// })

router.put('/:id', putUser)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({message: `Delete goal ${req.params.id}`})
// })

router.delete('/:id', deleteUser)

module.exports = router;