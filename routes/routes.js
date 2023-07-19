import indexRoute from "./index.route.js"

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
}