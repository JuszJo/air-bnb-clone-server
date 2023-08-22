import jwt from "jsonwebtoken"
import { getRole } from "../services/auth.services.js"

export default async function verifyToken(req, res, next) {
    if(req.path == "/login" || req.path == "/signup") {
        next()
    }
    else {
        const token = req.headers["authorization"]
    
        if(!token) {
            res.user = null
                
            next()
        }
        else {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)

                const {user: {username}} = decoded

                req.user = username

                const role = await getRole(username)

                req.role = role
        
                next()
            }
            catch(error) {
                res.user = null

                next()
            }
        }
    }
}