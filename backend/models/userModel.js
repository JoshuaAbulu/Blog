const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function (firstName, lastName, email, password){
    if(!validator.isEmail(email)){
        throw Error('Enter a valid email!')
    }

    if(!firstName || !lastName || !email || !password){
        throw Error('All fields are required!')
    }

    const emailExists = await this.findOne({email})

    if(emailExists){
        throw Error('This user already exists!')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await this.create({firstName, lastName, email, password: hashedPassword})

    return user
}

userSchema.statics.login = async function (email, password){
    if(!validator.isEmail(email)){
        throw Error('Enter a valid email!')
    }

    if(!email || !password){
        throw Error('All fields are required!')
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error('Account does not exist!')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if(!passwordMatch){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User Collection', userSchema)