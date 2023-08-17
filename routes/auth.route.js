import express from "express"

const router = express.Router()

router.get('/auth', (req, res) => {
    res.json({user: req.user})
})

export default router