import express from "express"
import { getListing } from "../controllers/listing.controller.js"

const router = express.Router()

router.get('/listing/:id', getListing)

export default router