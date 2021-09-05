const express = require('express')
const nodemailer = require('nodemailer')
const routerIndex = express.Router()
const routerTiendas = express.Router()
const routerAlmuerzo = express.Router()
const routerCena = express.Router()
const routerDesayuno = express.Router()
const routerLogin = express.Router()
const routerContact = express.Router()
const routerContactPost = express.Router()



///Mis rutas estáticas

routerIndex.get('/index', (req, res) => {
    res.render(__dirname + `/public/index`)
})

routerTiendas.get('/tiendas', (req, res) => {
    res.render(__dirname + `/public/tiendas`)

})

routerAlmuerzo.get('/almuerzo', (req, res) => {
    res.render(__dirname + `/public/almuerzo`)

})
routerCena.get('/cena', (req, res) => {
    res.render(__dirname + `/public/cena`)

})

routerDesayuno.get('/desayuno', (req, res) => {
    res.render(__dirname + `/public/desayuno`)

})

routerLogin.get('/login', (req, res) => {
    res.render(__dirname + `/public/login`)

})

routerContact.get('/contacto', (req, res) => {
    res.render(__dirname + `/public/contacto`)

})

// routerContactPost.post('/contacto', (req, res) => {
//     console.log(req.body)
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'ntchvergara@gmail.com',
//             pass: 'Elisabet1986'
//         }
//     })
//     const mailOptions = {
//         from: req.body.email,
//         to: 'ntchvergara@gmail.com',
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




module.exports = {
    routerIndex,
    routerTiendas,
    routerAlmuerzo,
    routerCena,
    routerDesayuno,
    routerLogin,
    routerContact,
    routerContactPost
};