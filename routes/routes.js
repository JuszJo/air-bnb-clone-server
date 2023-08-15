import indexRoute from "./index.route.js"
import loginRoute from "./login.route.js"
import signupRoute from "./signup.route.js"
import testRoute from "./test.route.js"
import authRoute from "./auth.route.js"
import verifyToken from "../middleware/auth.middleware.js"
import { cors, corsOptions } from "../middleware/cors.middleware.js"

export default function useRoutes(app) {
    // cors middleware
    app.options("*", corsOptions)

    app.use(cors)

    // middleware
    app.use(verifyToken)

    // routes
    app.use(testRoute)

    app.use(authRoute)

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