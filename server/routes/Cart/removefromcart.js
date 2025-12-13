import express from 'express'
const router = express.Router()
import Users from '../Auth/userschema'

router.delete('/', async(req, res)=> {
    try{
    const {userid, bookid} = req.body
    if(!bookid || !userid){
        return res.status(400).json({
            success: false,
            message: "All feilds are required!"
        })
    }
    const user = await Users.findById(userid)
    //status 400 = Bad requrest
    //status 404 = Resource not found
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User does not exist!"
        })
    }
    //.filter() creates a NEW array. It keeps elements only if the condition returns true.
    //array.filter(item => condition)
    user.cart = user.cart.filter(id => id.toString() !== bookid)
    await user.save()
    return res.status(200).json({
        success: true,
        message: "Book removed Successfully!" 
    })
}
catch(error){
    return res.status(500).json({
        success: false,
        message: "Server Error!",
        error: error.message
    })
}
})

export default router