const express = require('express');
const router = express.Router();
const imageController = require('../../controllers/Image');

router.get('/all', imageController.getAllImages);

router.get('/:id', imageController.getImage);

router.post('/upload', imageController.uploadImage);

module.exports = router;
