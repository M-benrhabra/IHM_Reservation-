const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController');

router.get('/index', offerController.getIndex);

router.get('/offer', offerController.getOffers);

module.exports = router;