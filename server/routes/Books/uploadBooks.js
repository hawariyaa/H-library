import express from 'express'
const router = express.Router()
import Books from './Bookschema.js'
import multer from 'multer'
import path from 'path'


router.post('/',async (req, res) => {
    try{
     const {bookname, booklanguage, Edition, category, fileType, bookyear, publisher, pages, ISBN, price, image} = req.body
     const books = new Books({
         Bookname: bookname,
         Booklanguage: booklanguage,
         BookEdition: Edition,
         category: category,
         filetype: fileType,
         BookYear: bookyear,
         Publisher: publisher,
         pages: pages,
         ISBN: ISBN,
         price: price,
         image: image
     })
     await books.save()
     return res.status(200).json({
        success: true,
        message: "successfully uploaded the Book!"
     })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Server error' + error
        })
    }
})

export default router