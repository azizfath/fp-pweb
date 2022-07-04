const express = require('express')
const router = express.Router();
const axios = require('axios')

router.get('/product', async function(req, res, next) {
    product = await axios.get('https://api.fiberku.site/products')
    contact = await axios.get('https://api.fiberku.site/contact')
    await res.render('pages/product', { product: product.data, contact: contact.data })
})

module.exports = router;