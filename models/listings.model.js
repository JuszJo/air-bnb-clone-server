import { Schema, model } from "mongoose";

const ListingsSchema = new Schema({}, {
    collection: "listingsAndReviews"
})

const Listings = model("listingsAndReview", ListingsSchema)

export default Listings