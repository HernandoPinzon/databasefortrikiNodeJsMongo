const express = require('express');
const router = express.Router();

const trikiRouter = require('./triki');
const sportsRouter = require('./sports');

router.use('/sports', sportsRouter)
router.use('/triki', trikiRouter)

module.exports = router;