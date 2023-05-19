const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.status(400).json({error: 'Authorization token needed!'})
    }

    const token = authorization.split(' ')[1]

    try{
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = userModel.findOne({_id})
        next()
    } catch(error){
        res.status(400).json({error: 'Token verification failed!'})
    }
}

module.exports = requireAuth