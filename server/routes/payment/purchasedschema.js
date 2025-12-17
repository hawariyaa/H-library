import mongoose from "mongoose";
const purchaseschema = new mongoose.Schema({
    tx_ref: {
        type: String,
        required: true
    },
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    bookid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    paid:{
        type: Boolean,
        required: true
    }
},{timestamps: true})

const Purchased = mongoose.model('Purchased', purchaseschema)
export default Purchased