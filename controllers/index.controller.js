import Listings from "../models/listings.model.js";

export async function sendListings(req, res) {
    try {
        const result = await Listings.find({}).limit(10)
    
        res.json(result)    
    }
    catch(error) {
        res.status(400).json({
            status: "error opening page"
        })
    }
}