import express from "express"
import deleteUpload from "../controllers/delete.controller.js"
import checkAdmin from "../middleware/admin.middleware.js"

const router = express.Router()

router.delete('/delete/:id', checkAdmin, deleteUpload)

export default router