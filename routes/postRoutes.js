const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Admin post routes
router.get('/admin/posts', postController.getAllPosts);
router.post('/admin/posts', postController.createPost);
router.put('/admin/posts/:id', postController.updatePost);
router.delete('/admin/posts/:id', postController.deletePost);

module.exports = router;