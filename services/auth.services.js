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

export async function saveUser(userObject) {
    try {
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