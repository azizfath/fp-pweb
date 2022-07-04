const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport');
const { isBuffer } = require('util');
const LocalStrategy = require('passport-local').Strategy
var flash = require("connect-flash")
const axios = require('axios')

app.use(flash());

app.use(session({
    secret: "p3mr0gw3b",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}))

app.use(passport.initialize())
app.use(passport.session())

authUser = (user, password, cb) => {
    //CEK LEWAT API

    let authenticated_user = { id: 123, name: "Kyle", pass: "12" }
        //Let's assume that DB search that user found and password matched for Kyle
    return cb(null, false, { message: "Incorrect Password" })
        //return cb(null, authenticated_user)
}

passport.use(new LocalStrategy(authUser))

passport.serializeUser((user, cb) => {
    cb(null, user)
})

passport.deserializeUser((user, cb) => {
    cb(null, user)
})

app.post("/login", passport.authenticate('local', {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true
}))

checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect("/login")
}

app.get("/dashboard", checkAuth, async function(req, res) {
    await res.render("dashboard.ejs", { name: req.user.name, pass: req.user.pass })
})

app.get('/login', async function(req, res, next) {
    await res.render('pages/login', { message: req.flash('error') })
})

app.post("/logout", (req, res) => {
    req.logOut()
    res.redirect("/login")
})

module.exports = app;