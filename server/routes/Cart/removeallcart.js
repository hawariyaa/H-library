import express from 'express'
const router = express.Router()
import Users from '../Auth/userschema'

router.delete('/', async (req,res)=>{
    try{
    const {userid} = req.body
    if(!userid){
        return res.status(400).json({
            success: false,
            message: "no user id!"
        })
    }
    const user = await Users.findOne({_id: userid})
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found!"
        })
    }
    user.cart = []
    await user.save()
    return res.status(200).json({
        success: true,
        message: "Successfully removed!"
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