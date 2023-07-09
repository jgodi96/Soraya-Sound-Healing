const express = require("express")
const router = express.Router()
const {registerDate} = require('../controllers/dateController.js')

router.post('/', registerDate)

module.exports = router;