import cloudinary from "../config/cloudinary.config.js"
import Listings from "../models/listings.model.js";

export default async function handleUpload(req, res) {
    try {
        const promises = Promise.all(req.files.map(file => cloudinary.uploader.upload(file.path, {folder: req.user})))

        const results = await promises;

        const secure_urls = results.map(result => result.secure_url)

        const userListing = new Listings({...req.body, images: secure_urls, owner: req.user})

        await userListing.save()

        res.json({ message: "Upload successful" })
    }
    catch(err) {
        if(err) console.log(err);

        res.json({ message: "Upload failed" })
    }
}