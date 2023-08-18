import express from "express"
import deleteUpload from "../controllers/delete.controller.js"

const router = express.Router()

router.delete('/delete/:id', deleteUpload)

export default router