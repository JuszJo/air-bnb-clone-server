import Listings from "../models/listings.model.js";

export async function sendListings(req, res) {
    const result = await Listings.find({}).limit(10)

    res.json(result)
}