import express from 'express'
const router = express.Router()
import Comment from './commentschema.js'


router.post('/', async(req, res)=>{
    try{
    const {comment, bookid, userid} = req.body
    if(!comment || !bookid || !userid){
        return res.json(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    const comments = new Comment({
        comment: comment,
        bookid: bookid,
        userid: userid
    })
    await comments.save()
    return res.status(200).json({
        success: true,
        message: "sucessfully added a comment!"
    })
}
catch(error){
    return res.status(500).json({
        success: false,
        message: "Server Error!"
    })
}
})


export default router