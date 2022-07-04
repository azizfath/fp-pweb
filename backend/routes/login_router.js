const express = require('express');

const router = express.Router();
const admin = require('../services/login_service')


router.get('/', async function(req, res, next) {
    try {
        result = await admin.login();
        res.json(await result[0]);
    } catch (err) {
        console.error(`Error when get contact`, err.message);
        res.status(400).json(err.message)
        next(err);
    }
});


module.exports = router;