const express = require('express');

const router = express.Router();
const contact = require('../services/contact_service')


router.get('/', async function(req, res, next) {
    try {
      result = await contact.getContact();
      res.json(await result[0]);
    } catch (err) {
      console.error(`Error when get contact`, err.message);
      res.status(400).json(err.message)
      next(err);
    }
});

router.get('/byId/:idContact', async function(req, res, next) {
  try {
    console.log(req.params.idContact)
    result = await contact.getContactId(req.params.idContact);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when get contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    result = await contact.addContact(req.body);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when add contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.put('/:idContact', async function(req, res, next) {
  try {
    result = await contact.updateContact(req.body,req.params.idContact);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when update contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.delete('/:idContact', async function(req, res, next) {
  try {
    result = await contact.deleteContact(req.params.idContact);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when delete contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

module.exports = router;