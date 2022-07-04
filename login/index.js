const express = require('express')
const app = express()
var path = require('path')
const port = 3002

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname)))
app.use(express.static(path.join(__dirname, '/assets')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const authRouter = require('./routes/auth')
app.use(authRouter)

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})