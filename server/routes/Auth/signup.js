import express from 'express'
const router = express.Router()
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Users from './userschema.js'
import rateLimit from 'express-rate-limit'
dotenv.config()
const secret_key = process.env.SECRET_KEY

const ratelimit = rateLimit({
    windowMs: 1000 * 60 * 60,
    max:5,
    message: 'Too many signups!'
})
router.post("/", ratelimit, async (req, res)=> {
    try {
        const {username, email, password} = req.body
        if(!username || !email || !password){
            return res.status(400).json({
                success: false,
                message: 'All feilds are required'
            })
        }
        const existinguser = await Users.findOne({email})
        if(existinguser){
            return res.status(400).json({
                success: false,
                message: 'User Already Exists!'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const users = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            cart: []
        })

        await users.save()
        const Data = {
            user: {
                id: users._id
            }
        }
        const token = jwt.sign(Data, secret_key, {
            expiresIn: '1D'
        })
        res.json({
            success: true,
            message: 'signup successful',
            token: token
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'server Error!'
        })
    }
})


export default router


