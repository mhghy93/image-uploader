const Image = require('../models/Image');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadImage = async (req, res) => {
  try {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    const image = await cloudinary.uploader.upload(file.tempFilePath);

    const imageData = new Image({
      title: file.name.split('.')[0],
      imageUrl: image.url,
    });

    await imageData.save();

    res.json(imageData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
