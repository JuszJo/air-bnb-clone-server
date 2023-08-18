import cloudinary from "../config/cloudinary.config.js"
import Listings from "../models/listings.model.js";

export default async function deleteUpload(req, res) {
    try {
        const result = await Listings.findByIdAndDelete(req.params.id)
    
        const response = await cloudinary.api.delete_resources([result.cloudinary.public_id])

        res.status(200).json({ message: "Delete successful" })
    }
    catch(err) {
        if(err) console.log(err);

        res.status(401).json({ message: "Delete failed" })
    }
}