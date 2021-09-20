//Módulos
const express = require('express')
const nodemailer = require('nodemailer')


const {contactController} = require('../controllers/contacto')


const routerIndex = express.Router()
const routerTiendas = express.Router()
const routerAlmuerzo = express.Router()
const routerCena = express.Router()
const routerDesayuno = express.Router()
const routerLogin = express.Router()
const routerContact = express.Router()
const router = express.Router()
// const routerContactPost = express.Router()

//Rutas estáticas
routerIndex.get('/index', (req, res) => {
   return res.status(200).render(__dirname + `/public/index`)
})

routerTiendas.get('/tiendas', (req, res) => {
    return res.status(200).render(__dirname + `/public/tiendas`)

})

routerAlmuerzo.get('/almuerzo', (req, res) => {
    return res.status(200).render(__dirname + `/public/almuerzo`)

})
routerCena.get('/cena', (req, res) => {
    return res.status(200).render(__dirname + `/public/cena`)

})

routerDesayuno.get('/desayuno', (req, res) => {
    return res.status(200).render(__dirname + `/public/desayuno`)

})

routerLogin.get('/login', (req, res) => {
    return res.status(200).render(__dirname + `/public/login`)

})

// routerContact.get('/contacto', contactController)

// routerContact.get('/contacto', (req, res) => {
//     return res.status(200).render(__dirname + `/public/contacto`)

// })

//Rutas dinámicas
// routerContactPost.post('/contacto', (req, res) => {
//     console.log(req.body)
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: '@gmail.com',
//             pass: ''
//         }
//     })
//     const mailOptions = {
//         from: req.body.email,
//         to: '@gmail.com',
//         subject: `Mensaje de ${req.body.email}: ${req.body.subject}`,
//         text: req.body.message
//     }

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error)
//             res.send('Error');
//         } else {
//             console.log(`Mail enviado: ` + info.response)
//             res.send(`Enviado`)
//         }

//     })

// })

// 



module.exports = {
    routerIndex,
    routerTiendas,
    routerAlmuerzo,
    routerCena,
    routerDesayuno,
    routerLogin,
    
    // routerContactPost
};