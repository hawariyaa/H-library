import express from 'express'
const router = express.Router()
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {OAuth2Client} from 'google-auth-library'
import Users from './userschema.js'
import rateLimit from 'express-rate-limit'
dotenv.config()
const secret_key = process.env.SECRET_KEY
const clientId = process.env.CLIENT_ID 
const client = new OAuth2Client(clientId)

const googlelimit = rateLimit({
   windowMs: 1000 * 60 * 60,
   max: 5,
   message: 'Too many tries!'
})
router.post('/', googlelimit, async (req, res) => {
     try {
        const {cred} = req.body
        if(!cred){
            return res.status(500).json({
                 success:false,
                 message: 'credential wrong!'
            })
        }
        const tickets = await client.verifyIdToken({
              idToken:cred,
              audience:clientId
        })
        const payload = tickets.getPayload()
        const {email, name, picture, email_verified} = payload
        if(!email_verified){
         return res.status(400).json({
            success:false,
            message: "Not verified user!"
         })
        }

        const findUser = await Users.findOne({email})
        if(findUser){
           data = {
            user: {
              id: findUser.id 
           }
        }
      
         const token = jwt.sign(data, secret_key, {
            expiresIn: '1D'
         })
         return res.status(200).json({
            success: true,
            message: "Login sucessful",
            token: token
         })
      }
      else{
          const user = Users({
              username:name,
              email:email,
              profilepic: picture
          })
          await user.save()
          const data = {
             user: {
               id: user._id
             }
          }
          const token =  jwt.sign(data, secret_key, {
            expiresIn: '1D'
          })
          return res.status(200).json({
            success: true,
            message: 'signup successful!',
            token: token
          })
         }

     } catch (error) {
        return res.status(500).json({
           success: false,
           message: "Server Error!"
        })
     }
})

export default router