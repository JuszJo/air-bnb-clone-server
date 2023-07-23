import jwt from "jsonwebtoken"
import { checkUser, saveUser } from "../services/auth.services.js";

export async function handleLogin(req, res) {
    const userObject = req.body
    
    try {
        if(await checkUser(userObject)) {
            const token = jwt.sign({user: userObject}, process.env.JWT_SECRET, {
                expiresIn: 300
            })

            res.json({
                status: "authorized",
                token,
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