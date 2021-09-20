const {contactController} = require('../controllers/contacto')
const {contact} = require('../models/contacto')

const express = require ('express')
const router = express.Router()


router.get('/', contactController)

router.post('/', async (req,res) =>{
    const {name, email, cel,msj} = req.body

    try {
        const user = await contact(name, email, cel, msj)

            return res.status(200).send(user)
        
    } catch (err) {
        console.log(err)
    }
})


module.exports = router