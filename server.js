const express = require('express')

const port = 3000
const app = express();
const {
    routerIndex, 
    routerTiendas, 
    routerAlmuerzo,
    routerCena,
    routerDesayuno,
    routerLogin,
    routerContact
    // routerContactPost
} = require('./routes/rutas');

app.use(express.static('public'))
app.use(express.json())


//archivos estáticos
app.use('/', routerIndex)
app.use('/', routerTiendas)
app.use('/', routerAlmuerzo)
app.use('/', routerCena)
app.use('/', routerDesayuno)
app.use('/', routerLogin)
app.use('/', routerContact)
// app.use('/', routerContactPost)






app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
})