import express from "express"
import useRoutes from "./routes/routes.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(express.json())

useRoutes(app)

const PORT = 3000

const URL = process.env.NODE_ENV == "production" ? process.env.MONGO_URL : "mongodb://127.0.0.1:27017/jobnb"

mongoose.connect(URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
})
.catch(error => {
    console.error(error)
})