import User from "../models/user.model.js"

export async function checkUser(userObject) {
    try {
        const result = await User.findOne({username: userObject.username, password: userObject.password})

        if(result) {
            return true
        }
        
        return false
    }
    catch(error) {
        throw error
    }
}

export async function saveUser(userObject) {
    try {
        const user = new User(userObject)

        await user.save()
    }
    catch(error) {
        throw error
    }
}