import express from 'express'
const router = express.Router()
import Comment from './commentschema.js'
import mongoose from 'mongoose'

router.get('/', async(req, res)=>{
    try{
    const {bookid} = req.query
    if(!bookid){
        return res.status(400).json({
            success: false,
            message: "Book id is needed!"
        })
    }
    //so here when quering the bookid is similar to the attribute name bookid in the database but for example
    //here if it was id we would do it like this, const comment = await Comment.find({bookid: id})
    const comments = await Comment.find({bookid})
    return res.status(200).json({
        success: true,
        message: "successfully retrived the comments!",
        comments: comments
    })
    }
    catch(error){
        return res.status(400).json({
            success: false,
            message: "Server Error!"
        })
    }
})

export default router