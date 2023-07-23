import { checkUser } from "../services/auth.services.js";

export function handleLogin(req, res) {
    const userObject = req.body

    console.log(userObject);

    if(checkUser(userObject)) {
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