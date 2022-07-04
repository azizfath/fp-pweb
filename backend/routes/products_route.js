const express = require('express');

const router = express.Router();
const products = require('../services/products_service')


router.get('/', async function(req, res, next) {
    try {
      result = await products.getProducts();
      res.json(await result[0]);
    } catch (err) {
      console.error(`Error when get Products`, err.message);
      res.status(400).json(err.message)
      next(err);
    }
});

router.get('/byId', async function(req, res, next) {
  try {
    result = await products.getProductsId(req.body);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when get Products`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    result = await products.addProducts(req.body);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when add Product`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.put('/:idProduct', async function(req, res, next) {
  try {
    result = await products.updateProducts(req.body,req.params.idProduct);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when update Product`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.delete('/:idProduct', async function(req, res, next) {
  try {
    // console.log(req.body,req.params.idProduct)
    result = await products.deleteProducts(req.params.idProduct);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when delete Product`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});
  
module.exports = router;