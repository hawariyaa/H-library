import express from 'express'
const router = express.Router()
import Users from '../Auth/userschema'

router.post('/', async(req, res)=>{
    try{
    const {userid, bookid} = req.body
    if(!userid || !bookid){
        return res.status(400).json({
            success: false,
            message: "All fields are required!"
        })
    }
    //MongoDB documents use _id, not id.
    const user = await Users.findById(userid)
    if(!user){
        return res.status(400).json({
            success: false,
            message: "user does not exist!"
        })
    }
    if(!user.cart.includes(bookid)){
        user.cart.push(bookid)
        await user.save()
    }
    return res.status(200).json({
        success: true,
        message: "Book added to cart successfully!"
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