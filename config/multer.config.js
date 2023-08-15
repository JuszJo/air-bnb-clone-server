import multer from "multer"

const diskStorageOptions = {
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
}

const storageEngine = multer.diskStorage(diskStorageOptions)

const multerStorage = {
    storage: storageEngine
}

const upload = multer(multerStorage)

export default upload