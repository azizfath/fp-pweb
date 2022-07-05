const express = require('express')
const router = express.Router();
const axios = require('axios')

router.get('/', async function(req, res, next) {
    product = await axios.get('https://api.fiberku.site/products')
    judul = await axios.get('https://api.fiberku.site/homeView')
    contact = await axios.get('https://api.fiberku.site/contact')
    promotion = await axios.get('https://api.fiberku.site/promotion')
    await res.render('pages/index', {
        product: product.data,
        judul: judul.data,
        contact: contact.data,
        promotion: promotion.data
    })
})

router.get('/index', async function(req, res, next) {
    product = await axios.get('https://api.fiberku.site/products')
    judul = await axios.get('https://api.fiberku.site/homeView')
    contact = await axios.get('https://api.fiberku.site/contact')
    promotion = await axios.get('https://api.fiberku.site/promotion')
    await res.render('pages/index', {
        product: product.data,
        judul: judul.data,
        contact: contact.data,
        promotion: promotion.data
    })
})

module.exports = router;