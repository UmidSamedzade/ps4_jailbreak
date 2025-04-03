const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array(), (req, res) => {
    res.json({
        success: true,
        files: req.files.map(file => file.originalname)
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));
