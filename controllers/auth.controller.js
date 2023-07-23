import { checkUser, saveUser } from "../services/auth.services.js";

export async function handleLogin(req, res) {
    const userObject = req.body
    
    try {
        if(await checkUser(userObject)) {
            res.json({
                status: "authenticated"
            })
        }
        else {
            res.json({
                status: "unauthorized"
            })
        }
    }
    catch(error) {
        res.status(400).json({
            status: "error during login"
        })
    }
}

export async function handleSignup(req, res) {
    const userObject = req.body

    try {
        await saveUser(userObject)

        res.json({
            status: "signup successful"
        })
    }
    catch(error) {
        res.status(400).json({
            status: "error during signup"
        })
    }
}