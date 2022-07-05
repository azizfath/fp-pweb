const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport');
const { isBuffer } = require('util');
const LocalStrategy = require('passport-local').Strategy
var flash = require('connect-flash')
const axios = require('axios');
const { authenticate } = require('passport');

app.use(flash());

app.use(session({
    secret: 'p3mr0gw3b',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}))

app.use(passport.initialize())
app.use(passport.session())

authUser = async(user, password, cb) => {
    res = await axios.get('https://api.fiberku.site/login')
    data = res.data
    let correct = false;
    let errmsg;

    data.forEach((element) => {
        if (!((user == element.username || user == element.email) && password == element.password)) {
            return errmsg = 'Invalid Credentials'
        }
        correct = { id: element.id_admin, name: element.username, pass: element.password }
    })

    return await cb(null, correct, { message: errmsg })

}

passport.use(new LocalStrategy(authUser))

passport.serializeUser((user, cb) => {
    cb(null, user)
})

passport.deserializeUser((user, cb) => {
    cb(null, user)
})

app.post('/', passport.authenticate('local', {
    successRedirect: '/admin/homeView',
    failureRedirect: '/',
    failureFlash: true
}))

checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/')
}

module.exports = app, checkAuth;