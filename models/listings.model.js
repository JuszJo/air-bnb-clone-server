import { Schema, model } from "mongoose";

const ListingsSchema = new Schema({}, {
    collection: "listingsAndReviews"
})

const listings = model("listingsAndReview", ListingsSchema)

export default listings