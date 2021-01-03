const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');

const app = express();

// connect database
connectDB();

app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Routes
app.use('/api/image', require('./routes/api/image'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
