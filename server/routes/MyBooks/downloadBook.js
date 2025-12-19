import express from 'express'
const router = express.Router()
import Purchased from '../payment/purchasedschema.js'
import Books from '../Books/Bookschema.js'

router.get('/', async (req, res)=>{
    try {
        const {userid} = req.query
        const {bookid} = req.body

    if(!userid || !bookid){
        return res.status(400).json({
            success:false,
            message: "Userid and bookid missing!"
        })
    }
    const purchased = await Purchased.findOne({
        userid,
        bookid,
        paid: true
    })
    if(!purchased){
        return res.status(403).json({
            success: false,
            message: "Access Denied!"
        })
    }
    const book = await Books.findById(bookid)
    return res.sendFile(book.Bookname, {root: process.cwd()})
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
    
})

export default router