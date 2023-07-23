import User from "../models/user.model.js"

export async function checkUser(userObject) {
    const result = await User.findOne({username: userObject.username, password: userObject.password})

    if(result) {
        return true
    }
    
    return false
}