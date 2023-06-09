require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')

const app = express()
const PORT = 8080

connectDB();

const methodOverride = require('method-override')

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use((req, red, next) => {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)
    next()
})

app.use(methodOverride('_method'))




const captainRoutes = require('./routes/CaptainsRoutes')
const foodRoutes = require('./routes/foodLogRoutes')

app.use('/logs', captainRoutes)
app.use('/food', foodRoutes)




app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})