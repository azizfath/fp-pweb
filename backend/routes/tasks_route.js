const express = require('express');

const router = express.Router();
const task = require('../services/tasks_service')


router.get('/', async function(req, res, next) {
    try {
      result = await task.getTask();
      res.json(await result[0]);
    } catch (err) {
      console.error(`Error when get task`, err.message);
      res.status(400).json(err.message)
      next(err);
    }
});

router.get('/byId/:idtask', async function(req, res, next) {
  try {
    console.log(req.params.idtask)
    result = await task.getTaskId(req.params.idtask);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when get task`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    result = await task.addTask(req.body);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when add task`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.put('/:idtask', async function(req, res, next) {
  try {
    result = await task.updateTask(req.body,req.params.idtask);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when update task`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

router.delete('/:idtask', async function(req, res, next) {
  try {
    result = await task.deleteTask(req.params.idtask);
    res.json(await result[0]);
  } catch (err) {
    console.error(`Error when delete task`, err.message);
    res.status(400).json(err.message)
    next(err);
  }
});

module.exports = router;