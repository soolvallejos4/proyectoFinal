const express = require ('express')
const router = express.Router()
const {sendContacController} = require('../controllers/contacto')

router.get('/', sendContacController)

module.exports = router