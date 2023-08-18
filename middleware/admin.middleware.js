export default function checkAdmin(req, res, next) {
    if(req.role == "admin") {
        next()
    }
    else {
        res.status(401).json({ message: "Unauthorized" })
    }
}