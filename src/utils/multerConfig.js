const multer = require('multer');
const path = require('path');
const User = require('../models/User');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const   
 ext = path.extname(file.originalname);
    cb(null, `src/${ext === '.jpg' || ext === '.png' || ext === '.jpeg' ? 'pets' : 'documents'}`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });