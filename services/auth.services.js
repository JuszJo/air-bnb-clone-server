import bycrypt from "bcrypt"
import User from "../models/user.model.js"

export async function checkUser(userObject) {
    try {
        const result = await User.findOne({username: userObject.username})

        if(!result) return false

        const found = await bycrypt.compare(userObject.password, result.password)

        if(found) {
            return true    
        }
    }
    catch(error) {
        throw error
    }
}

export async function getRole(username) {
    try {
        const result = await User.findOne({username}).select({role: 1, _id: 0})

        return result.role
    }
    catch(err) {
        throw err
    }
}

export async function getUser(username) {
    try {
        const result = await User.findOne({username}).select({name: 1, _id: 0})

        return result.name
    }
    catch(err) {
        throw err
    }
}

function validate_signup(userObject) {
    const errors = {
        message: {}
    }

    if(userObject.password.length <= 5) errors.message["password"] = "password length must be at least 6 characters"

    Object.keys(userObject).forEach(value => {
        if(!(userObject[value])) errors.message[value] = `${value} must be present`
    })

    return errors
}

export async function saveUser(userObject) {
    try {
        const errors = validate_signup(userObject)

        if(Object.keys(errors.message).length > 0) throw errors

        const saltRounds = 10

        const hashedPassword = await bycrypt.hash(userObject.password, saltRounds)

        const user = new User({
            ...userObject,
            password: hashedPassword,
        })

        await user.save()
    }
    catch(error) {
        throw error
    }
}