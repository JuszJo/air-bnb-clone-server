const prod = false

export function cors(req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": prod ? "https://jobnb.netlify.app" : "http://localhost:5173",
        "Access-Control-Allow-Methods": "GET, POST, DELETE",
        "Access-Control-Allow-Headers": "content-type, authorization",
    })

    next()
}

export function corsOptions(req, res) {
    res.set({
        "Access-Control-Allow-Origin": prod ? "https://jobnb.netlify.app" : "http://localhost:5173",
        "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "content-type, authorization",
        "Access-Control-Allow-Credentials": "true"
    })

    res.sendStatus(200)
}