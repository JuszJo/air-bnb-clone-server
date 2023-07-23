import indexRoute from "./index.route.js"
import loginRoute from "./login.route.js"
import signupRoute from "./signup.route.js"

export default function useRoutes(app) {
    // cors
    app.use((req, res, next) => {
        res.set({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        })

        next()
    })

    // routes
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