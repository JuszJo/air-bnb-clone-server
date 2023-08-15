import { Schema, model } from "mongoose";

const ListingsSchema = new Schema({}, {
    collection: "listingsAndReviews"
})

const ListingsSchema2 = new Schema({}, {
    collection: "listings"
})

const Listings = model("listings", ListingsSchema2)

export default Listings