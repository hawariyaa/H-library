import express from 'express'
const router = express.Router()
import { Chapa } from 'chapa-nodejs'
import dotenv from 'dotenv'
import Purchased from './purchasedschema.js'
dotenv.config()
const Secretkey = process.env.Secret_key 


const chapa = new Chapa({
  secretKey: process.env.Secret_key
})

router.post('/', async (req, res)=>{
    try {
       const {tx_ref, userid, bookid} = req.body
       if(!tx_ref){
          return res.status(400).json({
             success: false,
             message: "Missing tx_ref"
          })
       }
       const verify = await chapa.verify({tx_ref})
       const paid =  verify.status === "success" &&
  verify.data.status === "success" ? true : false
       const purchase = await Purchased.findOne({tx_ref})
       if(!purchase){
         const purchase = new Purchased ({
            tx_ref: tx_ref,
            userid: userid,
            bookid: bookid,
            paid: paid
         })
         await purchase.save()
       }
       else{
         purchase.paid = paid
         await purchase.save()
       }
       return res.status(200).json({
          success: verify.success,
          message: verify.message,
          data: verify.data,
          paid: purchase.paid
       })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error!",
            error: error.message
        })
    }
})

export default router