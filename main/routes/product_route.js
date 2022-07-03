const express = require('express')
const router = express.Router();
const axios = require('axios')

router.get('/product', async function(req, res, next) {
    result = await axios.get('https://api.fiberku.site/products')

    var data = [
        { bandwidth: '10 Mbps', name: 'FiberOptic', price: 1000000, description: "mampu untuk 3 devices" },
        { bandwidth: '20 Mbps', name: 'FiberOptic', price: 2000000, description: "mampu untuk 4 devices" },
        { bandwidth: '30 Mbps', name: 'FiberOptic', price: 3000000, description: "mampu untuk 5 devices" },
        { bandwidth: '40 Mbps', name: 'FiberOptic', price: 4000000, description: "mampu untuk 6 devices" },
        { bandwidth: '50 Mbps', name: 'FiberOptic', price: 5000000, description: "mampu untuk 7 devices" }
    ]
    res.render('pages/product', { data: result.data })
})

module.exports = router;