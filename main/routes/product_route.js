const express = require('express')
const router = express.Router();

router.get('/product', async function(req, res, next) {
    res.render('pages/product')
})

module.exports = router;