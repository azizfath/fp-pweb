const express = require('express');
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname)
  }
})
var upload = multer({ storage: storage })


const router = express.Router();
const homeViewSetting = require('../services/homeViewSetting_service')


router.get('/', async function(req, res, next) {
    try {
      result = await homeViewSetting.getHomeViewSetting();
      res.json(await result[0]);
    } catch (err) {
      console.error(`Error when get contact`, err.message);
      res.status(400).json(err.message)
      next(err);
    }
});

router.get('/byId/:idHomeViewSetting', async function(req, res, next) {
  try {
    console.log(req.params.idHomeViewSetting)
    result = await homeViewSetting.getHomeViewSettingId(req.params.idHomeViewSetting);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when get contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.post('/', upload.single('image'),async function(req, res, next) {
  try {
    if (req.file == undefined){
      imagePath = undefined;
    }else {
      imagePath = req.file.path
    }
    result = await homeViewSetting.addHomeViewSetting(req.body, imagePath);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when add contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.put('/:idHomeViewSetting', upload.single('image'),async function(req, res, next) {
  try {
    if (req.file == undefined){
      imagePath = undefined;
    }else {
      imagePath = req.file.path
    }
    result = await homeViewSetting.updateHomeViewSetting(req.body,req.params.idHomeViewSetting, imagePath);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when update contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.delete('/:idHomeViewSetting', async function(req, res, next) {
  try {
    result = await homeViewSetting.deleteHomeViewSetting(req.params.idHomeViewSetting);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when delete contact`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

module.exports = router;