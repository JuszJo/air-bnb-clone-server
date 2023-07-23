import jwt from "jsonwebtoken"

export default function verifyToken(req, res, next) {
    if(req.path == "/login" || req.path == "/signup") {
        next()
    }
    
    const token = req.headers["x-access-token"]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        next()
    }
    catch(error) {
        res.status(400).json({
            status: "invalid token"
        })
    }
}