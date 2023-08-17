import Listings from "../models/listings.model.js";

export async function getListing(req, res) {
    const result = await Listings.findOne({ _id: req.params.id })

    if(result) {
        res.status(200).json({
            status: "success",
            data: result
        })
    }
    else {
        res.status(404).json({
            status: "fail",
        })
    }
}