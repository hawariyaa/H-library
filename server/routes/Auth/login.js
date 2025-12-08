import express from 'express'
const router = express.Router()
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import rateLimit from 'express-rate-limit'
import Users from './userschema.js'
dotenv.config()
const secret_key = process.env.SECRET_KEY

const loginlimiter = rateLimit({
     windowMs: 1000 * 60 * 60,
     max:5,
     message: 'Too many login tries!'
})
router.post('/',loginlimiter, async (req, res)=>{
    try{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    const findUser = await Users.findOne({email})
    if(!findUser){
       return res.status(400).json({
          success: false,
          message: 'User does not exist!'
       })
    }
    const isMatch = await bcrypt.compare(password, findUser.password)
    if(isMatch){
        const data = {
            user: {
               id: findUser._id
            }
        }
        const token = jwt.sign(data, secret_key, {
            expiresIn: '1d'
        })
        return res.status(200).json({
            success: true,
            message: 'Login sucessful!',
            token: token
        })
    }
    else{
        return res.status(400).json({
            success: false,
            message: 'Incorrect Password or Email!'//you don't want to make it explicit which one is wrong ok
        })
    }
   }
   catch(error){
       return res.status(500).json({
          success: false,
          message: 'Server not working!' + error
       })
   }

} )

export default router