const express = require('express');
const multer = require('multer');

const router = express.Router();
const team = require('../services/team_service')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage })


router.get('/', async function(req, res, next) {
    try {
      result = await team.getTeam();
      res.json(await result[0]);
    } catch (err) {
      console.error(`Error when get team`, err.message);
      res.status(400).json(err.message)
      next(err);
    }
});

router.get('/byId', async function(req, res, next) {
  try {
    console.log(req.params.nim)
    result = await team.getTeamId(req.body.nim);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when get team`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.post('/', upload.single('image'), async function(req, res, next) {
  try {
    console.log(req.body);
    if (req.file == undefined){
        imagePath = undefined;
      }else {
        imagePath = req.file.path
    }
    result = await team.addTeam(req.body,imagePath);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when add team`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.put('/', upload.single('image'), async function(req, res, next) {
  try {
    if (req.file == undefined){
        imagePath = undefined;
      }else {
        imagePath = req.file.path
    }
    result = await team.updateTeam(req.body, imagePath);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when update team`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.delete('/', async function(req, res, next) {
  try {
    result = await team.deleteTeam(req.body.nim);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when delete team`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

module.exports = router;