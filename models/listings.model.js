import { Schema, model } from "mongoose";

const ListingsSchema = new Schema({}, {
    collection: "listingsAndReviews"
})

const ListingsSchema2 = new Schema({
    owner: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: {
        type: Array,
        // required: true,
    }
    
}, {
    collection: "listings"
})

const Listings = model("listings", ListingsSchema2)

export default Listings