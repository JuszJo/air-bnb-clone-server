import Listings from "../models/listings.model.js";

export async function getListing(req, res) {
    const result = await Listings.findOne({ _id: req.params.id })

    if(result) {
        const signout = req.user ? false : true

        res.status(200).json({...result._doc, role: req.role, signout: signout})
    }
    else {
        res.status(404).json({
            status: "fail",
        })
    }
}