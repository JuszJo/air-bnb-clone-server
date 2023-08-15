import express from "express"
import upload from "../config/multer.config.js"
import handleUpload from "../controllers/upload.controller.js"

const router = express.Router()

router.post('/upload', upload.array("files"), handleUpload)

export default router