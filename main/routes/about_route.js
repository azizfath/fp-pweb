const express = require('express')
const router = express.Router();
const axios = require('axios')

router.get('/about', async function(req, res, next) {
    result = await axios.get('https://api.fiberku.site/aboutMeView')
    res.render('pages/about', { data: result.data })
})

module.exports = router;