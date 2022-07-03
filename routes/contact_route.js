const express = require('express')
const router = express.Router();

router.get('/contact', async function(req, res, next) {
    res.render('pages/contact')
})

module.exports = router;