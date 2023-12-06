// Routes for the API

const express = require('express');
const router = express.Router();
const foodController = require('./controller/foodController');
router.use(express.json());
  
// POST
router.post('/createFood/', foodController.createFood);

// GET All Foods
router.get('/foods/', foodController.getAllFood);

// GET Chat GPT Medium Recipe
router.get('/ask1/', foodController.ask1);

// GET Chat GPT Hight Recipe
router.get('/ask2/', foodController.ask2);

module.exports = router;