const express = require('express');

const router = express.Router();
const mediaTransmission = require('../services/mediaTransmission_service')


router.get('/', async function(req, res, next) {
    try {
      result = await mediaTransmission.getMediaTransmission();
      res.json(await result[0]);
    } catch (err) {
      console.error(`Error when get contact`, err.message);
      res.status(400).json(err.message)
      next(err);
    }
});

router.get('/byId/:idmediaTransmission', async function(req, res, next) {
  try {
    console.log(req.params.idmediaTransmission)
    result = await mediaTransmission.getMediaTransmissionId(req.params.idmediaTransmission);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when get contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    result = await mediaTransmission.addMediaTransmission(req.body);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when add contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.put('/:idmediaTransmission', async function(req, res, next) {
  try {
    result = await mediaTransmission.updateMediaTransmission(req.body,req.params.idmediaTransmission);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when update contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.delete('/:idmediaTransmission', async function(req, res, next) {
  try {
    result = await mediaTransmission.deleteMediaTransmission(req.params.idmediaTransmission);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when delete contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

module.exports = router;