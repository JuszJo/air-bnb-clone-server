import express from "express"

const router = express.Router()

router.get('/auth', (req, res) => {
    res.send("authorized")
})

export default router