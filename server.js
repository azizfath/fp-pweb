const express = require('express')
const app = express()
const port = 3001
var path = require('path')
var adminRouter = require('./routes/admin_router');

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/assets')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/admin', adminRouter)

app.get('/', function(req, res) {
    res.render('pages/index')
})

app.listen(port || 3001)
console.log('server running at ', port)