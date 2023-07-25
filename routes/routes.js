import indexRoute from "./index.route.js"
import loginRoute from "./login.route.js"
import signupRoute from "./signup.route.js"
import testRoute from "./test.route.js"
import verifyToken from "../middleware/auth.middleware.js"

export default function useRoutes(app) {
    // cors
    app.options('*', (req, res) => {
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:5173",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "content-type, authorization",
            "Access-Control-Allow-Credentials": "true"
        })

        res.sendStatus(200)
    })

    app.use((req, res, next) => {
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:5173",
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers": "content-type, authorization",
        })

        next()
    })

    // middleware
    app.use(verifyToken)

    // routes
    app.use(testRoute)

    app.use(indexRoute)

    app.use(loginRoute)

    app.use(signupRoute)

    // error
    app.use((err, req, res, next) => {
        console.log(err.stack);

        res.status(500).json({
            status: err.message
        })
    })
}