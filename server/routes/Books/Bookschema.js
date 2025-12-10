import mongoose from "mongoose";
const Bookschema = new mongoose.Schema({
    Bookname: {
        type: String,
        required: true
    },
    Booklanguage: {
        type: String
    },
    BookEdition: {
        type: String
    },
    category: {
        type: String
    },
    filetype: {
        type: String
    },
    BookYear: {
        type: Number
    },
    Publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    ISBN:{
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    downloads: {
        type: Number,
        default: 0
    },
    file:{
        type: String
    },
    uploader: {
        //here we are creating a foreign key type refers to the _id unique id of the documents(Data-Type)
        //the second refers to Target Collection we want to link it to
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
}, {timestamps: true})
Bookschema.index({Bookname: 1})
Bookschema.index({category: 1})
Bookschema.index({ISBN: 1})

const Books = mongoose.model('Books', Bookschema)
export default Books

//These lines create database indexes in MongoDB for your Book collection.
//Indexes are special data structures that improve query performance.
//bookSchema.index({ bookName: 1 });// Creates an index on 'bookName' field
//Faster queries on indexed fields
//Faster sorting
//Better performance for frequent queries

//the timestamp adds two timestamps automatically to every document
/*{
  createdAt: Date,  // When the document was created
  updatedAt: Date   // When the document was last updated
}
*/