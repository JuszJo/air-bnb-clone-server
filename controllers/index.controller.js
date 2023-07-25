import Listings from "../models/listings.model.js";

export async function sendListings(req, res) {
    console.log(req.user);
    try {
        const result = await Listings.find({}).limit(10)
    
        res.status(200).json(result)
    }
    catch(error) {
        res.status(500).json({
            status: "error opening page"
        })
    }
}