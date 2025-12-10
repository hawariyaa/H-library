import mongoose from "mongoose";
const commentschema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    bookid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Books",
        required: true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }
}, {timestamps: true})

const Comment = mongoose.model('Comment', commentschema)
export default Comment