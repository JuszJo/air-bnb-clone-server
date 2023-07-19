import listings from "../models/listings.model.js";

export async function sendListings(req, res) {
    const result = await listings.find({}).limit(10)

    res.json(result)
}