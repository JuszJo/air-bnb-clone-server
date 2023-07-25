import jwt from "jsonwebtoken"

export default function verifyToken(req, res, next) {
    if(req.path == "/login" || req.path == "/signup") {
        next()
    }
    else {
        const token = req.headers["authorization"]
    
        if(!token) {
            res.status(401).json({
                error: "unauthorized"
            })
        }
        else {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)

                req.user = decoded
        
                next()
            }
            catch(error) {
                res.status(401).json({
                    error: error.message
                })
            }
        }
    }
}