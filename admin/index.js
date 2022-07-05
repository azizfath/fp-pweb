const express = require('express')
const app = express()
const port = 3002
var path = require('path')


app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/assets')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library

app.use(express.urlencoded({ extended: true }));

const authRouter = require('./routes/auth')
var adminRouter = require('./routes/admin_router');
const loginRouter = require('./routes/login-route')

app.use(authRouter)
app.use('/admin', adminRouter)
app.use(loginRouter)

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})