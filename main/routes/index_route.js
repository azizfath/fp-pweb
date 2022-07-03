const express = require('express')
const router = express.Router();

router.get('/', async function(req, res, next) {
    res.render('pages/index')
})

router.get('/index', async function(req, res, next) {
    res.render('pages/index')
})

module.exports = router;