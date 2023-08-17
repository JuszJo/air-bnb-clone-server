import jwt from "jsonwebtoken"
import { checkUser, saveUser } from "../services/auth.services.js";

export async function handleLogin(req, res) {
    const userObject = req.body
    
    try {
        if(await checkUser(userObject)) {
            const token = jwt.sign({user: userObject}, process.env.JWT_SECRET, {
                expiresIn: 300
            })

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            const {user: {username}} = decoded

            res.status(200).json({
                status: "authorized",
                token,
                username
            })
        }
        else {
            res.status(401).json({
                status: "unauthorized"
            })
        }
    }
    catch(error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export async function handleSignup(req, res) {
    const userObject = req.body

    try {
        await saveUser(userObject)

        res.status(200).json({
            status: "signup successful"
        })
    }
    catch(error) {
        res.status(500).json({
            error: error.message
        })
    }
}