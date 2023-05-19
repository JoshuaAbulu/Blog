const mongoose = require('mongoose')


const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
    },
    image: {
        type: String
    },
    views: {
        type: Number
    },
    likes: {
        type: Number
    }
}, {timestamps: true})


module.exports = mongoose.model('Blog Collection', blogSchema)