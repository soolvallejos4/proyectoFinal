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
   return res.status(200).render("index", {layout: "index"})
})

routerTiendas.get('/tiendas', (req, res) => {
    return res.status(200).render("tiendas", {layout: "laytiendas"})

})

routerAlmuerzo.get('/almuerzo', (req, res) => {
    return res.status(200).render("almuerzo", {layout:"default"})

})
routerCena.get('/cena', (req, res) => {
    return res.status(200).render("cena", {layout:"default"})

})

routerDesayuno.get('/desayuno', (req, res) => {
    return res.status(200).render("desayuno", {layout: "default"})

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