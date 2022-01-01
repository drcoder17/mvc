const express = require('express');
const router = express.Router();
const { homeCtrls } = require('../controllers/home');

router.get('/', homeCtrls);

module.exports = router;
