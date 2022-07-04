var express = require('express');
const axios = require('axios')
var router = express.Router();

router.get('/', async(req, res, next) => {
    result = await axios.get('https://api.fiberku.site/aboutMeView')
    res.render('pages/index', { data: result.data });
})

//  frontend content setting
router.get('aboutMeSetting', (req, res, next) => {

})

router.get('homeSetting', (req, res, next) => {

})

router.get('contact', (req, res, next) => {

})

//  product setting
router.get('product', (req, res, next) => {

})

router.get('mediaTransmission', (req, res, next) => {

})

// team setting
router.get('task', (req, res, next) => {

})

// 
router.get('team', (req, res, next) => {

})

module.exports = router;