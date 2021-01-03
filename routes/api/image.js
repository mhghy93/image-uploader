const express = require('express');
const router = express.Router();
const imageController = require('../../controllers/Image');

router.post('/upload', imageController.uploadImage);

module.exports = router;
