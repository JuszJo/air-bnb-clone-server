import cloudinary from "../config/cloudinary.config.js"

export default async function handleUpload(req, res) {
    try {
        const promises = Promise.all(req.files.map(file => cloudinary.uploader.upload(file.path, {folder: req.user})))

        const results = await promises;

        console.log(results);

        res.json({ message: "Upload successful" })
    }
    catch(err) {
        if(err) console.log(err);

        res.json({ message: "Upload failed" })
    }
}