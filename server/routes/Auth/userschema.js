import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilepic: {
        type:String,
    },
    cart: [
        {
         bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
        }
    ],
    uploads: [
         { type: mongoose.Schema.Types.ObjectId, ref: "Book" }
    ],
    purchasedBooks: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Book" }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Users = mongoose.model('Users', userschema)
export default Users
