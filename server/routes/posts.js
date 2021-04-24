import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost); // patch is used to edit already existing posts  and we need the id the know which post is being edited
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost); // we use patch because when we like a post we are updating it

export default router;