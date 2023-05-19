const blogModel = require('../models/blogModel')

const getBlogs = async (req, res) => {
    const blogs = await blogModel.find({})
    res.status(200).json(blogs)
}

const getBlog = async (req, res) => {
    const {id} = req.params
    const blog = await blogModel.findById(id)
    res.status(200).json(blog)
}

const createBlog = async (req, res) => {
    const {title, category, body, image} = req.body
    const blog = await blogModel.create({title, category, body, image})
    res.status(200).json(blog)
}

const deleteBlog = async (req, res) => {
    const {id} = req.params
    const blog = await blogModel.findOneAndDelete({_id: id})
    res.status(200).json(blog)
}

const updateBlog = async (req, res) => {
    const {id} = req.params
    const blog = await blogModel.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new:true})
    res.status(200).json(blog)
}

module.exports = {
    getBlogs,
    createBlog,
    deleteBlog,
    updateBlog,
    getBlog
}