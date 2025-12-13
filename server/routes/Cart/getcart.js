import express from 'express'
const router = express.Router()
import Users from '../Auth/userschema'

router.get('/', async(req, res)=>{
    try{
    const {userid} = req.query
    if(!userid){
        return res.status(400).json({
            success: false,
            message: "no user id!"
        })
    }
    const user = await Users.findOne({_id: userid})
    if (!user){
        return res.status(400).json({
            success: false,
            message: "user does not exist!"
        })
    }
    return res.status(200).json({
        success: true,
        message: "Retrived successfully!",
        cart: user.cart
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