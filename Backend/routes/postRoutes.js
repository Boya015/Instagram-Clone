const express = require('express');
const router = express.Router();
const { createPost, getPosts } = require('../controllers/postController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Import your post controller functions here

// In postRoutes.js or wherever your route is defined
router.post('/create', upload.single('image'), (req, res, next) => {
    console.log('File:', req.file); // Log the file information
    console.log('Body:', req.body); // Log the description/body information
    next(); // Proceed to the next middleware (which would be your createPost controller)
  }, createPost);
  
//other post routes. like fetching post
router.get('/create', upload.single('image') ,getPosts); // Authenticate users before fetching posts

module.exports = router;