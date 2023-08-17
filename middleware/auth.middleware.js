import jwt from "jsonwebtoken"

export default function verifyToken(req, res, next) {
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
        
                next()
            }
            catch(error) {
                res.user = null

                next()
            }
        }
    }
}