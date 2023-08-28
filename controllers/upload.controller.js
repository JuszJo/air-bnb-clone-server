import cloudinary from "../config/cloudinary.config.js"
import Listings from "../models/listings.model.js";
import { getUser } from "../services/auth.services.js";

function validate_upload(userObject, files) {
    const errors = {
        message: {}
    }

    if(files.length < 1) {
        errors.message["files"] = `please upload an image`
    }

    Object.keys(userObject).forEach(value => {
        if(!(userObject[value])) errors.message[value] = `${value} must be present`
    })

    return errors
}

export default async function handleUpload(req, res) {
    try {
        const errors = validate_upload(req.body, req.files)

        if(Object.keys(errors.message).length > 0) throw errors
        
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

        res.status(401).json({
            message: err.message
        })
    }
}