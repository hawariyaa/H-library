import express from 'express'
const router = express.Router()
import Users from '../Auth/userschema.js'

router.get('/', async(req, res)=>{
    try{
     const {userid} = req.query
     if(!userid){
        return res.status(400).json({
            success: false,
            message: "Userid is needed!"
        })
     }
     const user = await Users.findById(userid)
     if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found!"
        })
     }
     return res.status(200).json({
        success: true,
        message: "Successfully fetched purchased Books!",
        Books: user.purchasedBooks
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