const express = require('express')
const router = express.Router();

router.get('/login', async function(req, res, next) {
    res.render('pages/login')
})

module.exports = router;