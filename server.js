const express = require('express')
const handlebars = require ('express-handlebars')


const app = express();

const {
    routerIndex, 
    routerTiendas, 
    routerAlmuerzo,
    routerCena,
    routerDesayuno,
    routerLogin,
    
    
    // routerContactPost
} = require('./routes/rutas');

const RoutesForm = require('./routes/contacto')
const RoutesSend = require('./routes/send')


app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
    extname: 'hbs'
    
}))

app.use(express.static('public'))
app.use(express.json())



//rutas estáticos

app.use('/', routerIndex)
app.use('/', routerTiendas)
app.use('/', routerAlmuerzo)
app.use('/', routerCena)
app.use('/', routerDesayuno)
app.use('/', routerLogin)

app.use('/contacto', RoutesForm)
app.use('/send', RoutesSend)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})