const express = require('express');

const router = express.Router();
const promotion = require('../services/promotion_service')

router.get('/', async function(req, res, next) {
    try {
        result = await promotion.getPromotion();
        res.json(await result[0]);
    } catch (err) {
        console.error(`Error when get task`, err.message);
        res.status(400).json(err.message)
        next(err);
    }
});

router.get('/byId/:idPromotion', async function(req, res, next) {
    try {
        console.log(req.params.idPromotion)
        result = await promotion.getPromotionId(req.params.idPromotion);
        res.json(await result[0]);
    } catch (err) {
        console.error(`Error when get task`, err.message);
        res.status(400).json(err.message)
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        result = await promotion.addPromotion(req.body);
        res.json(await result[0]);
    } catch (err) {
        console.error(`Error when add task`, err.message);
        res.status(400).json(err.message)
        next(err);
    }
});

router.put('/:idPromotion', async function(req, res, next) {
    try {
        result = await promotion.updatePromotion(req.body,req.params.idPromotion);
        res.json(await result[0]);
    } catch (err) {
        console.error(`Error when update task`, err.message);
        res.status(400).json(err.message)
        next(err);
    }
});

router.delete('/:idPromotion', async function(req, res, next) {
    try {
        result = await promotion.deletePromotion(req.params.idPromotion);
        res.json(await result[0]);
    } catch (err) {
        console.error(`Error when delete task`, err.message);
        res.status(400).json(err.message)
        next(err);
    }
});

module.exports = router;