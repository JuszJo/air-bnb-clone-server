import cloudinary from "../config/cloudinary.config.js"
import Listings from "../models/listings.model.js";
import { getUser } from "../services/auth.services.js";

export default async function handleUpload(req, res) {
    try {
        const promises = Promise.all(req.files.map(file => cloudinary.uploader.upload(file.path, {folder: req.user})))

        const results = await promises;

        const secure_urls = results.map(result => result.secure_url)

        const name = await getUser(req.user)

        const userListing = new Listings({...req.body, images: secure_urls, owner: req.user, owner_name: name, cloudinary: {
            asset_id: results[0].asset_id,
            public_id: results[0].public_id,
        }})

        await userListing.save()

        res.status(200).json({ message: "Upload successful" })
    }
    catch(err) {
        if(err) console.log(err);

        res.status(401).json({ message: "Upload failed" })
    }
}