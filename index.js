import express from "express"
import useRoutes from "./routes/routes.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(express.json())

useRoutes(app)

const PORT = 3000

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
})