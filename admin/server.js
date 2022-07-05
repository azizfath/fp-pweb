const express = require('express')
// var bodyParser = require('body-parser');
const app = express()
const port = 3001
var path = require('path')
const authRouter = require('./routes/auth')
var adminRouter = require('./routes/admin_router');
const loginRouter = require('./routes/login-route')
// var multer  = require('multer')
// var upload = multer();

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/assets')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))
// app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded());
// // in latest body-parser use like below.
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
// or
app.use(express.urlencoded({ extended: true }));

// app.use(express.bodyParser());
app.use(authRouter)
app.use('/admin', adminRouter)
app.use('/login', loginRouter)

app.get('/', function(req, res) {
    res.render('pages/index')
})

app.listen(port || 3001)
console.log('server running at ', port)