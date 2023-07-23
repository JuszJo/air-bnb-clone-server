import { checkUser } from "../services/auth.services.js";

export async function handleLogin(req, res) {
    const userObject = req.body
    
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