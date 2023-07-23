import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    collection: "users"
})

const User = model("user", UserSchema)

export default User