const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/contact', async function(req, res, next) {
    team = await axios.get('https://api.fiberku.site/team')
    contact = await axios.get('https://api.fiberku.site/contact')
    product = await axios.get('https://api.fiberku.site/products')
    res.render('pages/contact', { data: team.data, product: product.data, contact: contact.data })
})

module.exports = router;