import indexRoute from "./index.route.js"
import loginRoute from "./login.route.js"
import signupRoute from "./signup.route.js"
import testRoute from "./test.route.js"
import verifyToken from "../middleware/auth.middleware.js"

export default function useRoutes(app) {
    // cors
    app.use((req, res, next) => {
        res.set({
            "Access-Control-Allow-Origin": "http://localhost:5173",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type, x-access-token",
            "Access-Control-Allow-Credentials": "true",
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
            status: "internal server error"
        })
    })
}