import { Schema, model } from "mongoose";

const UserSchema = new Schema({}, {
    collection: "users"
})

const User = model("user", UserSchema)

export default User