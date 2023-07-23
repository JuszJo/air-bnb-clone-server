export function checkUser(userObject) {
    const username = "josh123"
    const password = 1234

    if(userObject.username == username && userObject.password == password) {
        return true
    }
    
    return false
}