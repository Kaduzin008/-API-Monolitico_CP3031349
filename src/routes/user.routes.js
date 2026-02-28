const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/users', userController.create);
router.get('/users', userController.findAll);
router.get('/users/:id', userController.findById);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

module.exports = router;