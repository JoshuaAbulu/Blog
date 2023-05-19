const express = require('express')
const { getBlogs, createBlog, deleteBlog, updateBlog, getBlog } = require('../controllers/blogController')
const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

router.get('/', getBlogs)
router.get('/:id', getBlog)

router.use(requireAuth)

router.post('/', createBlog)
router.delete('/:id', deleteBlog)
router.patch('/:id', updateBlog)

module.exports = router