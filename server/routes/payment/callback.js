import express from 'express'
const router = express.Router()
import { Chapa } from 'chapa-nodejs'
import dotenv from 'dotenv'
dotenv.config()
const Secretkey = process.env.Secret_key 

const chapa = new Chapa({
  secretKey: process.env.Secret_key
})

router.post('/', async (req, res)=>{
    try {
       const {tx_ref} = req.body
       if(!tx_ref){
          return res.status(400).json({
             success: true,
             message: "Missing tx_ref"
          })
       }
       const verify = await chapa.verify({tx_ref})
       if(verify.status !== "success"){

       }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error!"
        })
    }
})

export default router