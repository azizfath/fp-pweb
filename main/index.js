const express = require('express')
const app = express()
var path = require('path')

const port = 3001

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '/assets')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexViewRouter = require('./routes/index_route')
const aboutViewRouter = require('./routes/about_route')
const contactViewRouter = require('./routes/contact_route')
const productViewRouter = require('./routes/product_route')

app.use(indexViewRouter)
app.use(aboutViewRouter)
app.use(contactViewRouter)
app.use(productViewRouter)

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})