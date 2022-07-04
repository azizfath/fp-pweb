const express = require('express')
const app = express()
var path = require('path')

const port = 3002

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/assets')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const adminRouter = require('./routes/admin_router');

app.use(adminRouter)

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
})