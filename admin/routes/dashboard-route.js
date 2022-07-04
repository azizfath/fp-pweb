const express = require('express')
const router = express.Router()

router.get('/dashboard', checkAuth, async(req, res) => {
    await res.render('dashboard.ejs', { name: req.user.name, pass: req.user.pass })
})

module.exports = router;