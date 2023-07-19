import express from "express"
import { sendListings } from "../controllers/index.controller.js"

const router = express.Router()

router.get('/', sendListings)

export default router