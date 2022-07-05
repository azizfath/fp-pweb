const express = require('express')
const router = express.Router()

router.get('/', async(req, res, next) => {
    if (req.isAuthenticated()) return await res.redirect('/admin/homeView')
    await res.render('pages/login', { message: req.flash('error') })
})

router.post('/logout', (req, res, next) => {
    req.logOut((err) => {
        if (err) { return next(err) }
        res.redirect('/')
    })
})

module.exports = router;