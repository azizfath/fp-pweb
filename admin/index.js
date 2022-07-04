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
const loginRouter = require('./routes/login-route')
const dashboardRouter = require('./routes/dashboard-route')

app.use(authRouter)
app.use(loginRouter)
app.use(dashboardRouter)

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})