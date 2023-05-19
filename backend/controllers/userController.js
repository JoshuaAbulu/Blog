const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const signupUser = async (req, res) => {
    const {firstName, lastName, email, password} = req.body

    try{
        const user = await userModel.signup(firstName, lastName, email, password)
        const token = createToken(user._id)
        res.status(200).json({firstName, lastName, email, password, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await userModel.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({firstName: user.firstName, lastName: user.lastName, email, password, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    signupUser,
    loginUser
}