const express = require('express');
const router = express.Router();
const { usersGetCtrls, usersAddCtrls } = require('../controllers/home');

router.get('/users', usersGetCtrls);

router.post('/users', usersAddCtrls);

module.exports = router;
