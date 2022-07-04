const express = require('express')
const router = express.Router();
const axios = require('axios')

router.get('/about', async function(req, res, next) {
    result = await axios.get('https://api.fiberku.site/aboutMeView')
    contact = await axios.get('https://api.fiberku.site/contact')
    product = await axios.get('https://api.fiberku.site/products')
    await res.render('pages/about', { data: result.data, product: product.data, contact: contact.data })
})

module.exports = router;